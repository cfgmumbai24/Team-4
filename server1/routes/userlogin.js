const router = require('express').Router();
const Customer = require('../models/customer.model');


router.get('/', async (req, res) => {
    try {
      const data = await Customer.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
// // Route for handling user login
router.post('/', async (req, res) => {
    const { user_id, password } = req.body;
  
    try {
      // Find user by username and password
      const user = await Customer.findOne({ user_id, password });
  
      if (user) {
        const { user_id, password, phone_no, email_user } = user;
        res.json({ success: true, user_id, password, phone_no, email_user });
      } else {
        // If user not found or password incorrect, send failure response
        res.json({ success: false });
      }
    } catch (error) {
      // If an error occurs, send error response
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports = router;