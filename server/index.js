const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex');
const { helpers } = require('faker');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(express.static('public'));

const PORT = 3020;

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    database: 'SDC_Products',
    user: 'postgres',
    password: 'password',
    host: '127.0.0.1',
    port: 5433,
  },
});

app.get('/reviews/:product_id/list', (req, res) => {
  let list = {};
  let rvphotos;

  db.select()
    .from('photos')
    .where({ fk_id: req.params.product_id })
    .then((data) => {
      rvphotos = data;
      return rvphotos;
    })
    .then(() => db.select()
      .from('reviews')
      .where({ product_id: req.params.product_id })
      .then((dbReviews) => {
        list = {
          review_id: dbReviews[0].review_id,
          rating: 5,
          summary: dbReviews[0].summary,
          recommended: dbReviews[0].recommended,
          response: dbReviews[0].response,
          body: dbReviews[0].body,
          date: dbReviews[0].review_date,
          reviewer_name: dbReviews[0].reviewer_name,
          helpfulness: dbReviews[0].helpfulness,
          photos: rvphotos,
        };
        return list;
      }))
    .then((data) => res.send(data));
});

app.get('/reviews/:product_id/meta', (req, res) => {
  let meta = {};
  db.from('reviews', 'prod_charateristics')
    .where({ product_id: req.params.product_id })
    .select('product_id', 'reviews.recommended', 'review_id', 'ratings')
    .then((metaChar) => {
      meta = {
        product_id: (metaChar[0].product_id).toString(),
        recommended: { 0: metaChar[0].recommended },
        ratings: {
          1: 1,
          2: 1,
          3: 2,
          4: 1,
          5: 1,
        },
        characteristics: {},
      };
      return meta;
    })
    .then(() => db.select()
      .from('prod_characteristics', 'reviews')
      .where({ fk_id: req.params.product_id })
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const char = data[i];
          charName = char.name;
          meta.characteristics[`${charName}`] = {
            id: char.id,
            value: char.value,
          };
        }
        return meta;
      }))
    .then((data) => res.send(data));
});

// app.post('/test', (req, res) => {
//   db('users').insert({
//     name: req.body.name,
//     email: req.body.email,
//   })
//     .then(() => res.sendStatus(200));
// });

// app.put('/test', (req, res) => {
//   db('users')
//     .where({ id: 3 })
//     .update({ name: 'Little John' }).returning('*')
//     .then((data) => {
//       res.send(data);
//     });
// });

// app.delete('/test', (req, res) => {
//   db('users')
//     .where({ id: 4 })
//     .del()
//     .then(() => { res.json({ success: true }); });
// });

app.listen(PORT, () => {
  console.log(`app is running ${PORT}`);
});
