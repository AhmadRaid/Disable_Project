const categoryController = require("./categoryController.js");
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
module.exports.getAllCategory = async(req, res, next) => {
  // try_catch(async () => {
  //   const { message, data, code } = await categoryController.getAllCategory();

  //   if (code === 0) {
  //     return next(new Success(message, data));
  //   }

  //   return next(new BadRequest(message));
  // });

  try {
    const { message, data, code } = await categoryController.getAllCategory({
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

module.exports.addCategory =  async(req, res, next) => {
  try {
    const { message, data, code } = await categoryController.addCategory({
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
}

module.exports.editCategory = async (req, res, next) => {
  try {
    const { message, data, code } = await categoryController.editCategory({
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

module.exports.deleteCategory = async (req, res, next) => {
  try {
    const { message, data, code } = await categoryController.deleteCategory({
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
