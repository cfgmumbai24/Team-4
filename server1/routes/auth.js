const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const { setGlobal } = useGlobalState();


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

        await axios.get('http://localhost:5000/api/user/'+fullName).then(response =>{
            setGlobal(response.data.user);
        });



        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

 // Assuming you have a Customer model

 router.get('/user/:fullName', async (req, res) => {
    const { fullName } = req.params;

    try {
        const user = await User.findOne({ fullName });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Server error during fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
