const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    }, 
    lastname: {
        type: String,
        required: true
    },
    age: {
      type: Number
    },
    major: {
      type: String
    },
    skills: {
      type: String
    },
    country: { //TODO:Can use validator library to check ISO code valid country
      type: String
    },
    city: {
      type: String
    },
    postcode: {
      type: String
    },
    additionalInfo: {
      type: String
    },
    diplomas: {
      type: String
    },
    yearOfGraduation: {
        type: Number,
        required: true //TODO:Can use validator to check valid Date-year
    },
    school: {
      type: String
    },
    educationCountry: { //TODO:Can use validator library to check ISO code valid country
      type: String
    },
    createdDate: {
      type: Date,
      required: true
  }
}, {
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema)
module.exports = Student
