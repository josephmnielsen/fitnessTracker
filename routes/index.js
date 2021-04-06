const router = require('express').Router()

router.use('/api', require('./workoutRoutes'))
router.use(require('./viewRoutes'))
router.use('/seed', require('./'))