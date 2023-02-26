const jobController = require('./jobController.js')
const { Success, Created } = require('../../../utils/response/success/successes')
const {
    InternalServerError,
    BadRequest,
    NotFound,
} = require('../../../utils/response/success/successes')
module.exports.getAllJob = async (req, res, next) => {
    try {

        const { message, data, code } = await jobController.getAllJob({
            ...req.body
        })

        if (code === 0) {
            return next(new Success(message, data));
        }

        return next(new BadRequest(message));
    } catch (err) {
        console.log(err);
        return next(new InternalServerError(req));
    }
}

module.exports.addJob = async (req, res, next) => {
    try {

        const { message, data, code } = await jobController.addJob({
            ...req.body
        })

        if (code === 0) {
            return next(new Success(message, data));
        }

        return next(new BadRequest(message));
    } catch (err) {
        console.log(err);
        return next(new InternalServerError(req));
    }
}

module.exports.editJob = async (req, res, next) => {
    try {

        const { message, data, code } = await jobController.editJob({
            ...req.body
        })

        if (code === 0) {
            return next(new Success(message, data));
        }

        return next(new BadRequest(message));
    } catch (err) {
        console.log(err);
        return next(new InternalServerError(req));
    }
}


module.exports.deleteJob = async (req, res, next) => {
    try {

        const { message, data, code } = await jobController.deleteJob({
            ...req.body
        })

        if (code === 0) {
            return next(new Success(message, data));
        }

        return next(new BadRequest(message));
    } catch (err) {
        console.log(err);
        return next(new InternalServerError(req));
    }
}