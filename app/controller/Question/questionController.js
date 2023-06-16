const { Question } = require("../../Model");

module.exports.getAllQuestion = async (data) => {
  try {
    let questionAnswer = await Question.find({});
    if (!questionAnswer) {
      return { code: 1, message: "We dont have question", data: null };
    }
    return {
      code: 0,
      message: "commonSuccess.message",
      data: { questionAnswer },
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports.addQuestion = async (data) => {
  try {
    const { courseId, question, answer } = data;

    let questionAnswer = await Question.create({
      courseId,
      question,
      answer,
    });
    return {
      code: 0,
      message: "commonSuccess.message",
      data: { questionAnswer },
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports.viewQuestionDetails = async (questionId) => {
  try {
    const question = await Question.findOne({
      _id : questionId,
    }).select("-__v");

    if (!question) {
      return {
        code: 1,
        message: "Question . not Found Question ",
        data: null,
      };
    }

    return { code: 0, message: "commonSuccess.message", data: question };
  } catch (error) {
    console.log(err);
    throw new Error(err);
  }
};
