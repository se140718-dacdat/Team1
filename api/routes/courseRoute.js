const express = require('express');
const router = express.Router();
const Course = require('../models/courseModel');

router.route('/courses').get((req, res) => {
    Course.find()
        .then(foundCourse => res.json(foundCourse))
})

module.exports = router;