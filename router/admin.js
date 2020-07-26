const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('app/client/index');
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
  res.render('app/admin/category/register');
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