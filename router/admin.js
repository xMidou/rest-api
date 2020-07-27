const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
if(!req.session.email) res.redirect('/admin/login')
  else res.render('app/admin/category/dashboard', {firstName: req.session.firstName, lastName: req.session.lastName});
})
router.get('/create', (req, res) => {
  res.render('app/admin/create');
})
router.get('/read', (req, res) => {
    res.render('app/admin/read');
  })
router.get('/product', (req, res) => {
  res.render('app/admin/category/product', {firstName: req.session.firstName, lastName: req.session.lastName});
})
router.get('/post', (req, res) => {
  res.render('app/admin/category/post', {firstName: req.session.firstName, lastName: req.session.lastName});
})

router.get('/newpost', (req, res) => {
  res.render('app/admin/category/new_post', {firstName: req.session.firstName, lastName: req.session.lastName});
})
router.get('/contact', (req, res) => {
  res.render('app/admin/category/contact', {firstName: req.session.firstName, lastName: req.session.lastName});
})
router.get('/table_user', (req, res) => {
  res.render('app/admin/category/user', {firstName: req.session.firstName, lastName: req.session.lastName});
})

// LOGIN
router.get('/login', (req, res) => {
  res.render('app/admin/category/login');
})

router.post('/login', (req, res) => {
  console.log('1111111111111')
  req.session.email = req.body.email;
  req.session.password = req.body.password;
  req.session.firstName = req.body.firstName;
  req.session.lastName = req.body.lastName;
  req.session.save(function(err) {
    // session saved
  })
  console.log(req.session)
  res.redirect('/');
})
router.get('/logout', (req, res) => {
  req.session.destroy(function(err) {
    // cannot access session here
  })
  res.redirect('/admin/login');
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