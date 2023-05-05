const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const db = mongoose.connection;
const Movie = require('./models/Movie')
require('dotenv').config()

const PORT = process.env.PORT

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)

app.use(express.static('public'));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/' , (req, res) => {
    res.send('Hello World!');
  });

app.post('/reels', (req,res) =>{
    Movie.create(req.body)
    .then((createdMovie) =>{
        res.json(createdMovie)
    })
});


app.get('/reels', (req, res) =>{
    Movie.find({})
    .then((foundMovie) =>{
        res.json(foundMovie)
    })
});


app.delete('/reels/:id', (req, res) =>{
    Movie.findByIdAndRemove(req.params.id)
    .then((deletedMovie) =>{
        res.json(deletedMovie)
    })
});


app.put('/reels/:id', (req, res) =>{
    Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedMovie) => res.json(updatedMovie))
})


app.listen(PORT, () => console.log( 'Listening on port:', PORT));