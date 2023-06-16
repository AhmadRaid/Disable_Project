  const express = require('express');
const controller = require('../../../app/controller/Course');

const router = express.Router();

router.get(
    '/listing',
    controller.getAllCourse,
  );

router.post(
  '/add',
  controller.addCourse,
);

router.get(
  '/show/:courseId',
  controller.viewCourseDetails,
);

module.exports = router;
