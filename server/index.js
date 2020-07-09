const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex');
const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

// app.use(express.static('public'));

const PORT = 3020

const db = knex ({
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
      database : "sdc_products",
      user : 'postgres',
      password : 'password',
      host : '127.0.0.1',
      port: 5433
    }
});

app.get('/', (req, res) => {
    db('users').select()
    .then(data=>{ res.send(data); });
    })

app.post('/test', (req, res) => {
    db('users').insert({
        name: req.body.name,
        email: req.body.email
      })
      .then(() => res.sendStatus(200))
  })

app.put('/test', (req, res)=>{
    db('users')
        .where({id: 3})
        .update({
            name:"Little John"}).returning('*').then((data)=>{
                res.send(data);
            });
        });

app.delete('/test', (req, res)=>{
    db('users')
    .where({id:4})
    .del()
    .then(()=>{res.json({success:true})})
})

app.listen(PORT, ()=> {
	console.log(`app is running ${PORT}`);
})

