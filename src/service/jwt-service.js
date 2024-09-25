import JsonWebToken from "jsonwebtoken";

const generateAcesssToken = (user) => {
  JsonWebToken.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

export default {
  generateAcesssToken,
};
