const { Course } = require("../../Model");

module.exports.getAllCourse = async (data) => {
  try {
    let course = await Course.find({});
    if (!course) {
      return { code: 1, message: "We dont have course", data: null };
    }
    return { code: 0, message: "commonSuccess.message", data: { course } };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports.addCourse = async (data) => {
  try {
    const { name, title, description } = data;

    let course = await Course.create({
      name: name,
      title: title,
      description: description,
    });

    return { code: 0, message: "commonSuccess.message", data: { course } };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports.viewCourseDetails = async (courseId) => {
  try {
    
    const course = await Course.findOne({
      _id: courseId,
    });

    if (!course) {
      return { code: 1, message: "course.notFound course", data: null };
    }

    return { code: 0, message: "commonSuccess.message", data: { course } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
