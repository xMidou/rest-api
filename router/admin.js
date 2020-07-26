const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('app/admin/category/dashboard');
})
router.get('/create', (req, res) => {
  res.render('app/admin/create');
})
router.get('/read', (req, res) => {
    res.render('app/admin/read');
  })
router.get('/product', (req, res) => {
  res.render('app/admin/category/product');
})
router.get('/post', (req, res) => {
  res.render('app/admin/category/post');
})
router.get('/newpost', (req, res) => {
  res.render('app/admin/category/new_post');
})
router.get('/contact', (req, res) => {
  res.render('app/admin/category/contact');
})
router.get('/table_user', (req, res) => {
  res.render('app/admin/category/user');
})

// LOGIN
router.get('/login', (req, res) => {
  res.render('app/admin/category/login');
})

router.post('/login', (req, res) => {
  res.redirect('/');
})

// Register
router.get('/register', (req, res) => {
  res.render('register');
})
router.post('/register', (req, res) => {
  console.log(req.body);
  res.redirect('/register');
})
// Create
router.get('/create', (req, res) => {
  res.render('app/admin/create');
})
// Read
router.get('/read', (req, res) => {
  res.render('app/admin/read');
})
module.exports = router;