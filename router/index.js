const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  console.log(req.session)
  res.render('app/client/index', {data : req.session.email});
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
router.get('/single/:id', (req, res) => {
  const { id } = req.params;
  res.render('app/client/single', {id});
})
router.get('/apartment', (req, res) => {
  res.render('app/client/apartments');
})
router.get('/detail', (req, res) => {
  res.render('app/client/apartment-detail');
})
router.get('/register', (req, res) => {
  res.render('app/client/register');
})
router.get('/login', (req, res) => {
  res.render('app/client/login');
})
router.post('/login', (req, res) => {
  // console.log(req.body)
  req.session.email = req.body.email;
  req.session.password = req.body.password;
  console.log(req.session);
})

// Register
// router.get('/register', (req, res) => {
//   res.render('register');
// })
// router.post('/register', (req, res) => {
//   console.log(req.body);
//   res.redirect('/register');
// })

module.exports = router;