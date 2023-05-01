const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Movie = require('./models/Movie')

app.use(express.json());
app.use(cors());




app.post('/reel', (req,res) =>{
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


app.listen(3000, ()=>{
    console.log('listening...');
});


mongoose.connect('mongodb://localhost:27017/reels')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});