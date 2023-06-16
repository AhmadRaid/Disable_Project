const transactionController = require('./transactionController.js')
const { Success, Created } = require('../../../utils/response/success/successes')
const {
    InternalServerError,
    BadRequest,
    NotFound,
} = require('../../../utils/response/success/successes')
module.exports.getAllTransactions = async (req, res, next) => {
    try {

        const { message, data, code } = await transactionController.getAllTransactions({
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

module.exports.addTransaction = async (req, res, next) => {
    try {

        const { message, data, code } = await transactionController.addTransaction({
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

module.exports.editTransaction = async (req, res, next) => {
    try {

        const { message, data, code } = await transactionController.editTransaction({
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


module.exports.deleteTransaction = async (req, res, next) => {
    try {

        const { message, data, code } = await transactionController.deleteTransaction({
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