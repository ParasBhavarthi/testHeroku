import jwt from "jsonwebtoken";
import secrets from "../../example.secrets";

const generateToken = (username) => {
  return jwt.sign({username: username}, secrets.TOKEN_KEY, {expiresIn: 24 * 60 * 60});
};

export { generateToken }