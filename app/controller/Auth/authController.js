const { User } = require("../../Model");
const bcrypt = require("bcrypt");
const { create_Tokens_with_cookie } = require("../../../utils/jwt");

module.exports.login = async (data) => {
  const { email, password } = data;
  try {
    if (!email || !password) {
      return {
        code: 2,
        message: "user.please_provide_email_and_password!",
        data: null,
      };
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {

      return { code: 2, message: "user.incorrectEmail_OR_Password", data: null };
      
    }

    create_Tokens_with_cookie({
      id: user._id,
      role: user.role,
    });

    return {
      code: 0,
      message: "commonSuccess.message",
      data: { accessToken, refreshToken },
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.signup = async (data) => {
  const { name, email, phone, password } = data;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    create_Tokens_with_cookie({
      id: user._id,
      role: user.role,
    });

    return { code: 0, message: "commonSuccess.message", data: { user } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
