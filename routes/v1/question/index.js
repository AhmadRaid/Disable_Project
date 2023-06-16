const express = require('express');
const controller = require('../../../app/controller/Question');

const router = express.Router();

router.get(
    '/listing',
    controller.getAllQuestion,
  );

router.post(
  '/add',
  controller.addQuestion,
);

router.get(
  '/show/:questionId',
  controller.viewQuestionDetails,
);

module.exports = router;
