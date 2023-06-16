const courseController = require("./courseController.js");
const {
  Success,
  Created,
} = require("../../../utils/response/success/successes");
const try_catch = require("../../../utils/try_catch");

const {
  InternalServerError,
  BadRequest,
  NotFound,
} = require("../../../utils/response/error/errors");
module.exports.getAllCourse = async(req, res, next) => {
  try {
    const { message, data, code } = await courseController.getAllCourse({
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

module.exports.addCourse =  async(req, res, next) => {
  try {
    const { message, data, code } = await courseController.addCourse({
      ...req.body
    });

    if (code === 0) {
      return next(new Success(message, data));
    }

    return next(new BadRequest(message));

  } catch (err) {
    console.log(err);
    return next(new InternalServerError(req));
  }

}


module.exports.viewCourseDetails = async(req, res, next) => {
  try {
    console.log(req.params.courseId)
    const { message, data, code } = await courseController.viewCourseDetails(req.params.courseId);

    if (code === 0) {
      return next(new Success(message, data));
    }

    return next(new BadRequest(message));
  } catch (err) {
    console.log(err);
    return next(new InternalServerError(req));
  }
};

