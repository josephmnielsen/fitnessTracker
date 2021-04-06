const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workout', (req,res) => {
  Workout.findById()
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.get('/workouts/range', (req,res) => {
  Workout.find().limit(7)
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.get('/workouts', (req,res) => {
  Workout.find()
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.post('/workouts', (req,res) => {
  Workout.create({})
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.put('/workouts/:id', (req,res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: {exercises: req.body }})
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.delete('/workouts/:id', (req,res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

module.exports = router