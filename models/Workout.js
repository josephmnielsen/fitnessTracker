const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: Date,
  exercises: [{
    type: {
      type: String
    },
    name: {
      type: String
    }, 
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
    
  }]
})
Workout.set('toObject', { virtuals: true })
Workout.set('toJSON', { virtuals: true })
Workout.virtual('duration')
  .get(function () {
    let totalDuration = 0
    this.exercises.forEach(exercise => {
      totalDuration += exercise.duration
    })
    return totalDuration
  })

module.exports = model('Workout', Workout)