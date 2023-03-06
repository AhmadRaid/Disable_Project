const { User, verification_code } = require("../../Model");
const bcrypt = require("bcrypt");
const { create_Tokens_with_cookie } = require("../../../utils/jwt");
const { Send_Email } = require("../../../utils/Email/email");

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
      return {
        code: 2,
        message: "user.incorrectEmail_OR_Password",
        data: null,
      };
    }

    let token = create_Tokens_with_cookie({
      id: user._id,
      role: user.role,
    });

    return {
      code: 0,
      message: "commonSuccess.message",
      data: { token, user },
    };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.signUp = async (data) => {
  const { firstName, lastName, role, email, phone, password } = data;
  try {
    const isUsedEmail = await User.findOne({ email });
    if (isUsedEmail) {
      return { code: 2, message: "user.usedEmail", data: null };
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role,
    });

    let token = create_Tokens_with_cookie({
      id: user._id,
      role: user.role,
    });

    return { code: 0, message: "commonSuccess.message", data: { token, user } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.forgetPassword = async (data) => {
  const { userId } = data;
  try {
    const user = await User.findOne({ userId });

    if (!user) {
      return { code: 2, message: "user not found" };
    }
    const verificationCode = Math.floor(Math.random() * 900000) + 100000;
    await Send_Email(user.email, verificationCode);
    await verification_code.create({
      userId,
      verificationCode,
    });

    return { code: 0, message: "success email send" };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.verification_email = async (data) => {
  const { email } = data;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { code: 2, message: "user not found" };
    }
    const verificationCode = Math.floor(Math.random() * 900000) + 100000;
    await Send_Email(email, verificationCode);
    await verification_code.create({
      userId: user.id,
      verificationCode,
    });

    return { code: 0, message: "success email send" };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
