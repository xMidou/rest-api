const express = require('express');
const router = express.Router();

/* GET users listing. */
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
router.get('/all-apart', (req, res) => {
  res.render('app/client/browse_apart');
})

// LOGIN
router.get('/login', (req, res) => {
  res.render('app/client/login');
})

router.post('/login', (req, res) => {
  res.redirect('/');
})

// Register
router.get('/register', (req, res) => {
  res.render('app/client/register');
})
router.post('/register', (req, res) => {
  console.log(req.body);
  res.redirect('/register');
})

module.exports = router;