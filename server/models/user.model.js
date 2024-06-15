const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    phone_no: { type: Number, required: true, unique: true },
    city: { type: String, required: true },
    hobbies: { type: String, required: true },
    income: { type: Number, required: true },
    

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
