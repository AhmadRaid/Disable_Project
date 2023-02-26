const userController = require("./userController.js");
const { User } = require("../../Model");
const bcrypt = require("bcrypt");

module.exports.getAllUser = async (data) => {
  try {
    let user = await User.find({});
    if (!user) {
      return { code: 1, message: "We dont have User", data: null };
    }
    return { code: 0, message: "commonSuccess.message", data: { user } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.addUser = async (data) => {
  const { name, email, phone, password, role } = data;
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
    });

    return { code: 0, message: "commonSuccess.message", data: { user } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.editCategory = async (data) => {
  const { name, title, description } = data;
  try {
    const user = await User.findOne({
      name,
      title,
      description,
    });

    if (!user) {
      return { code: 1, message: "category.notFoundUser", data: null };
    }

    user.name = name;
    user.title = title;
    user.description = description;

    await category.save();

    return { code: 0, message: "commonSuccess.message", data: user };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.deleteCategory = async (data) => {
  const { name, title, description } = data;
  try {
    const user = await User.findOne({
      name,
      title,
      description,
    });

    if (!user) {
      return { code: 1, message: "user.notFoundUser", data: null };
    }

    User.deleteOne({
      name,
      title,
      description,
    });

    return { code: 0, message: "commonSuccess.message", data: user };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.viewUserDetails = async (data) => {
  const { name, email, phone, password } = data;
  try {
    const user = await User.findOne({
      name,
      email,
      phone,
    }).select("-__v");

    if (!user) {
      return { code: 1, message: "category.notFoundUser", data: null };
    }

    return { code: 0, message: "commonSuccess.message", data: user };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
