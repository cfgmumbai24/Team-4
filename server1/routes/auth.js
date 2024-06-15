const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const User = require('../models/user.model');


router.post('/signup', async (req, res) => {
    const { fullName, age, gender, phone_no, city, hobby1, hobby2, income } = req.body;
  
    try {
      const userExists = await User.findOne({ phone_no });
  
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const user = await User.create({ fullName, age, gender, phone_no, city, hobby1, hobby2, income  });
  
      res.status(201).json({ message: 'User registered successfully', success: true });
    } catch (error) {
      console.error('Error during signup:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

router.post('/login', async (req, res) => {
    const { fullName } = req.body;

    try {
        const user = await User.findOne({ fullName });

        if (!user ) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

 // Assuming you have a Customer model

router.get('/user/:user_id', async (req, res) => {
    const { user_id } = req.params;

    try {
        // Find the customer with the provided user_id
        const user = await User.findOne({ user_id });

        if (user) {
            // If user is found, send user information in response
            const { fullName, age, gender, phone_no, city, hobby1, hobby2, income } = user;
            res.json({ fullName, age, gender, phone_no, city, hobby1, hobby2, income });
        } else {
            // If user is not found, send a 404 error
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        // If an error occurs, send a 500 error
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});




module.exports = router;
