const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    review: String,
    image: String,
    ytlink: String,
    rating: Number
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;