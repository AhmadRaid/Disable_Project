const JWT = require('jsonwebtoken');
require('dotenv').config();

function createAccessToken(object) {
  const token = JWT.sign(
    {
      data: object,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    },
    "process.env.JWT_ACCESS_KEY",
  );
  return token;
}

function createRefreshToken(object) {
  const token = JWT.sign(
    {
      data: object,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
    },
    process.env.JWT_REFRESH_KEY,
  );
  return token;
}

function createRecoverToken(object) {
  const token = JWT.sign(
    {
      data: object,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    process.env.JWT_RECOVER_KEY,
  );
  return token;
}
function verifyRecoverToken(token) {
  return JWT.verify(token, process.env.JWT_RECOVER_KEY);
}
function verifyIdToken(token) {
  return JWT.verify(token, process.env.JWT_ACCESS_KEY);
}
function verifyRefreshToken(token) {
  return JWT.verify(token, process.env.JWT_REFRESH_KEY);
}
module.exports = {
  createAccessToken,
  createRefreshToken,
  verifyIdToken,
  createRecoverToken,
  verifyRecoverToken,
  verifyRefreshToken,
};
