const { Transaction } = require("../../Model");
const mongoose = require("mongoose");

module.exports.getAllTransactions = async (data) => {
  try {
    let transaction = await Transaction.find({});
    if (!transaction) {
      return { code: 1, message: "We dont have transaction", data: null };
    }
    return {
      code: 0,
      message: "commonSuccess.message",
      data: { transaction },
    };
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports.addTransaction = async (data) => {
  try {
    const { title, user_id, category_id, job_id } = data;
    let transaction = await Transaction.create({
      title,
      user_id,
      category_id,
      job_id,
    });
    return { code: 0, message: "commonSuccess.message", data: { transaction } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.editTransaction = async (data) => {
  const { name, title, description } = data;
  try {
    const category = await Transaction.findOne({
      name,
      title,
      description,
    });

    if (!category) {
      return { code: 1, message: "category.notFoundcategory", data: null };
    }

    category.name = name;
    category.title = title;
    category.description = description;

    await category.save();

    return { code: 0, message: "commonSuccess.message", data: category };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.deleteTransaction = async (data) => {
  const { name, title, description } = data;
  try {
    const category = await Transaction.findOne({
      name,
      title,
      description,
    });

    if (!category) {
      return { code: 1, message: "category.notFoundcategory", data: null };
    }

    Category.deleteOne({
      name,
      title,
      description,
    });

    return { code: 0, message: "commonSuccess.message", data: category };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.viewTransactionDetails = async (data) => {
  const { name, title, description } = data;
  try {
    const category = await Transaction.findOne({
      name,
      title,
      description,
    }).select("-__v");

    if (!category) {
      return { code: 1, message: "category.notFoundcategory", data: null };
    }

    return { code: 0, message: "commonSuccess.message", data: category };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
