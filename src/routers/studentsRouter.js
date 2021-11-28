const express = require('express');
const router = new express.Router();
const auth = require('../middlewares/auth')
const Student = require('../models/student')

// Add New Student
router.post('/students', auth, async (req, res) => {
  const student = new Student(req.body)
  try {
      await student.save();      
      res.status(201).send({ student })
  } catch (e) {
      res.status(400).send(e);
  }
})

// Get Student By ID
router.get('/students/:id', auth, async (req, res) => {
  try {    
    const student = await Student.findById(req.params.id)      
      if (!student) {        
        throw new Error()
      }      
      res.status(200).send(student)      
  } catch (e) {      
      res.status(404).send(e)
  }
})

// Update Student Details By ID
router.put('/students/:id', auth, async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['firstname', 'lastname', 'age', 'major', 'skills', 'country', 'city', 'postcode', 'additionalInfo', 'diplomas', 'yearOfGraduation', 'school', 'educationCountry']; 
    // updates.every checks if every item of (updates) can be found in (allowedUpdates)
    for(let i=0; i< updates.length; i++) {
        const update = updates[i];
        const isValidoperator = allowedUpdates.includes(update);
        if (!isValidoperator) {
          return res.status(403).send('Forbidden')
        }
    }
    const student = await Student.findById(req.params.id)
    updates.forEach((update)=> student[update] = req.body[update])
    await student.save()
    res.status(200).send(student)
  } catch (e) {
      res.status(400).send(e);
  }
})

module.exports = router;