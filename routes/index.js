var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', (req, res) => {
  res.render('app/client/index');
})
router.get('/about', (req, res) => {
  res.render('app/client/about');
})
router.get('/contact', (req, res) => {
  res.render('app/client/contact');
})
router.get('/news', (req, res) => {
  res.render('app/client/news');
})
router.get('/single', (req, res) => {
  res.render('app/client/single');
})
router.get('/apartment', (req, res) => {
  res.render('app/client/apartments');
})
router.get('/detail', (req, res) => {
  res.render('app/client/apartment-detail');
})


module.exports = router;
