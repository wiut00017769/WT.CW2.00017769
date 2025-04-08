const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
router.get('/register', (req, res) => {
  res.render('user/register', { title: 'User Registration' });
});
router.post('/register', [
  body('email').isEmail().withMessage('Please enter a valid email address.'),
  body('password').notEmpty().withMessage('Password is required.').isLength({ min: 8, max: 16 }).withMessage('Password must be between 8 and 16 characters.')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('user/register', { errors: errors.array(), formData: req.body, title: 'User Registration' });
  }
  res.render('user/register_success', { title: 'Registration Successful' });
});
module.exports = router;

