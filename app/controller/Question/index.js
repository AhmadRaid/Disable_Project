const questionController = require("./questionController.js");
const {
  Success,
  Created,
} = require("../../../utils/response/success/successes");

const {
  InternalServerError,
  BadRequest,
  NotFound,
} = require("../../../utils/response/error/errors");

module.exports.getAllQuestion = async (req, res, next) => {
  try {
    const { message, data, code } = await questionController.getAllQuestion({
      ...req.body,
    });

    if (code === 0) {
      return next(new Success(message, data));
    }

    return next(new BadRequest(message));
  } catch (err) {
    console.log(err);
    return next(new InternalServerError(req));
  }
};

module.exports.addQuestion = async (req, res, next) => {
  try {
    const { message, data, code } = await questionController.addQuestion({
      ...req.body,
    });

    if (code === 0) {
      return next(new Success(message, data));
    }

    return next(new BadRequest(message));
  } catch (error) {
    console.log(err);
    return next(new InternalServerError(req));
  }
};

module.exports.viewQuestionDetails = async (req, res, next) => {
  try {
    const { message, data, code } =
      await questionController.viewQuestionDetails(req.params.questionId);

    if (code === 0) {
      return next(new Success(message, data));
    }

    return next(new BadRequest(message));
  } catch (err) {
    console.log(err);
    return next(new InternalServerError(req));
  }
};
