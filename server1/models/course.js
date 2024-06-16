const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tag: {type: String, required: true},
  description: {
    type: String,
    required: false,
  },
  download_link: {
    type: String,
    required: [true, "Dowload link is required"]
  },
  secured_link: {
    type: String,
    required: [true, "Secure link is required"]
  },
  link: {
    type: String,
    required: false
  }
  
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
