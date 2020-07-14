const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    res.render('index');
    res.send(req.body);
});

module.exports = router;