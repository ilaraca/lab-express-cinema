const express = require('express');
const Movie = require('../models/Movie.js');

const router = express.Router();
/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});
/* GET movies page */
router.get('/movies', (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render('movies', { movies });
    })
    .catch((error) => {
      console.log(error);
    });
});

/* GET movie Detail */
router.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;
  Movie.findOne({ _id: movieId })
    .then((movie) => {
      res.render('movie-detail', { movie });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
