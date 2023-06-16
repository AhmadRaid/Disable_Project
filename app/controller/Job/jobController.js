const jobController = require("./jobController.js");
const { Job } = require("../../Model");

module.exports.getAllJob = async (data) => {
  try {
    let job = await Job.find({});
    if (!job) {
      return { code: 1, message: "We dont have Job", data: null };
    }
    return { code: 0, message: "commonSuccess.message", data: { job } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.addJob = async (data) => {
  try {
    const { title, description, category_id } = data;
    let job = await Job.create({
      title,
      description,
      category_id,
    });
    return { code: 0, message: "commonSuccess.message", data: { job } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.editJob = async (data) => {
  const { category_id, title, description } = data;
  try {
    const job = await Job.findOne({
      title,
      description,
      category_id,
    });

    if (!job) {
      return { code: 1, message: "Jobs.notFoundjob", data: null };
    }

    job.title = title;
    job.description = description;
    job.category_id = category_id;

    await job.save();

    return { code: 0, message: "commonSuccess.message", data: Job };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.deleteJob = async (data) => {
  const { category_id, title, description } = data;
  try {
    const job = await Job.findOne({
      title,
      description,
      category_id,
    });

    if (!job) {
      return { code: 1, message: "Job.notFoundjob", data: null };
    }

    job.deleteOne();

    return { code: 0, message: "commonSuccess.message", data: Job };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.viewJobDetails = async (data) => {
  const { category_id, title, description } = data;
  try {
    const job = await Job.findOne({
      title,
      description,
      category_id,
    }).select("-__v");

    if (!job) {
      return { code: 1, message: "Job.notFoundjob", data: null };
    }

    return { code: 0, message: "commonSuccess.message", data: Job };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
