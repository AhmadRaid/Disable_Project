const { Transaction } = require("../../Model");
const mongoose = require("mongoose");

module.exports.getAllTransactions = async (data) => {
  try {
    const transaction = await Transaction.aggregate([
      {
        $lookup: {
          from: "category",
          localField: "title", // this in transaction db
          foreignField: "title", // this in category db
          as: "category_title_docs",
        },
      },
      {
        $project:{
            _id:1,
            title:1,
            job_id:1
        }
      },
      {
        $group:{
            _id:"$title",
            numTransaction : { $sum : 1},
          //  avgPrice : { $avg : "$price"}
        }
      }
    ]);

    //     {
    //         $match: {
    //             $or:[
    //                 {category_id : mongoose.Types.ObjectId("63f633c854e220677e8f61f4")},
    //              //   {category_id : mongoose.Types.ObjectId("63f648c0626b9e43709bf0c1")}
    //             ]
    //         },
    //     }
    // ])

    return { code: 0, message: "commonSuccess.message", data: { transaction } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
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
