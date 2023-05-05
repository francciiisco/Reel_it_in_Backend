const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    review: String,
    image: String,
    rating: String,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;