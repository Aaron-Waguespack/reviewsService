require('newrelic');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex');
const redis = require('redis');

const port_redis = process.env.PORT || 6379;
const redis_client = redis.createClient(port_redis);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(express.static('public'));

const PORT = 8080;

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    database: 'sdc_ec2',
    user: 'postgres',
    password: 'password',
    host: 'ec2-52-14-234-240.us-east-2.compute.amazonaws.com',
    port: 5432,
  },
});

checkCache = (req, res, next) => {
  const { product_id } = req.params;

  redis_client.get(product_id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    if (data != null) {
      res.send(data);
    } else {
      next();
    }
  });
};

app.get('/loaderio-022a971c333e22e97ce251d43669281c/',
  (req, res) => { res.status(200).send('loaderio-022a971c333e22e97ce251d43669281c'); });

app.get('/reviews/:product_id/list', checkCache, async (req, res) => {
  try {
    const id = req.params.product_id;
    const trythis = await db.select('review_id', 'rating', 'recommend',
      'response', 'body', 'review_date', 'reviewer_name',
      'helpfulness', 'reported', 'photos', 'characteristics')
      .from('sdc_schema.reviews')
      .where({ product_id: id });

    redis_client.setex(id, 3600, JSON.stringify(trythis));
    return res.send({
      product: req.params.product_id,
      page: 0,
      count: 5,
      results: trythis,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

app.get('/reviews/:product_id/meta', (req, res) => {
  db.from('sdc_schema.reviews')
    .where({ product_id: req.params.product_id })
    .select('product_id', 'recommend', 'review_id', 'rating', 'characteristics')
    .then((data) => {
      const meta = {
        product_id: req.params.product_id,
        ratings: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        },
        recommended: 0,
        characteristics: {
          size: 0,
          width: 0,
          comfort: 0,
          quality: 0,
          length: 0,
          fit: 0,
        },
      };
      for (let i = 0; i < data.length; i++) {
        const temp = data[i].rating;
        meta.ratings[temp] = meta.ratings[temp] + 1;
        meta.recommended += data[i].recommend;
      }
      for (let f = 0; f < data.length; f++) {
        // console.log(data[f].characteristics[5][1][1]);
        const val = data[f].characteristics;
        meta.characteristics.size += parseInt(val[0][1][1]) / data.length;
        meta.characteristics.width += parseInt(val[1][1][1]) / data.length;
        meta.characteristics.comfort += parseInt(val[2][1][1]) / data.length;
        meta.characteristics.quality += parseInt(val[3][1][1]) / data.length;
        meta.characteristics.length += parseInt(val[4][1][1]) / data.length;
        meta.characteristics.fit += parseInt(val[5][1][1]) / data.length;
      }
      res.send(meta);
    });
});

app.post('/test', (req, res) => {
  // db('users').insert({
  //   name: req.body.name,
  //   email: req.body.email,
  // })
  //   .then(() => res.sendStatus(200));
});

app.put('/test', (req, res) => {
  // db('users')
  //   .where({ id: 3 })
  //   .update({ name: 'Little John' }).returning('*')
  //   .then((data) => {
  //     res.send(data);
  //   });
});

app.delete('/test', (req, res) => {
  // db('users')
  //   .where({ id: 4 })
  //   .del()
  //   .then(() => { res.json({ success: true }); });
});

app.listen(PORT, () => {
  console.log(`app is running ${PORT}`);
});
