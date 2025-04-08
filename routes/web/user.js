const express = require('express');
const router = express.Router();
router.get('/register', (req, res) => {
  res.render('user/register', { title: 'User Registration' });
});
module.exports = router;
