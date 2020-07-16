const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex');

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
  db.select()
    .from('reviews')
    .where({ product_id: req.params.product_id })
    .then((dbReviews) => {
      const photoPromises = dbReviews.map((review) => (
        console.log(review),
        db.select()
          .from('photos')
          .where({ fk_id: review.review_id })
          .then((photos) => {
            review.photos = photos;
            return review;
          })
      ));
      return Promise.all(photoPromises);
    })
    .then((reviewsWithPhotos) => {
      res.send({
        product: req.params.product_id,
        page: 0,
        count: 5,
        results: reviewsWithPhotos,
      });
    });
});

app.get('/reviews/:product_id/metas', (req, res) => {
  let test = {};

  db.from('reviews', 'prod_charateristics')
    .where({ product_id: req.params.product_id })
    .select('product_id', 'reviews.recommended', 'review_id')
    .then((reviewsWithPhotos) => {
      test = reviewsWithPhotos[0];
      return test;
    })
    .then(() => db.select()
      .from('prod_characteristics', 'reviews')
      .where({ fk_id: req.params.product_id })
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const char = data[i];
          charName = char.name;
          test[`${charName}`] = {
            id: char.id,
            value: char.value,
          };
        }
        return test;
      }))
    .then((data) => res.send(data));
});

app.post('/test', (req, res) => {
  db('users').insert({
    name: req.body.name,
    email: req.body.email,
  })
    .then(() => res.sendStatus(200));
});

app.put('/test', (req, res) => {
  db('users')
    .where({ id: 3 })
    .update({ name: 'Little John' }).returning('*')
    .then((data) => {
      res.send(data);
    });
});

app.delete('/test', (req, res) => {
  db('users')
    .where({ id: 4 })
    .del()
    .then(() => { res.json({ success: true }); });
});

app.listen(PORT, () => {
  console.log(`app is running ${PORT}`);
});
