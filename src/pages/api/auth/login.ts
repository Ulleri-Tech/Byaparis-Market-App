import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import connectToDatabase from "@/helpers/connectDB";
import { User } from "@/helpers/models/users";
import bcrypt from "bcrypt";

const SECRET_ACCESS_KEY =
  "c08d2fe8672ccde6ebc7ea2953a3e52731204097e2d87d3dff3e03f92086632e";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!req.body) {
      res.statusCode = 404;
      res.end("Error");
      return;
    }
    const { email, password } = req.body;
    await connectToDatabase();

    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (!existingUser) {
      return res.status(400).json({ message: "User not found!" });
    }
    // Check Password
    const matchedPassword = await bcrypt.compare(
      password,
      existingUser.password || ""
    );
    if (!matchedPassword) {
      return res.status(400).json({ message: "Invalid Credential!" });
    }
    const accessToken = generateAccessToken(existingUser);
    const userCredential = {
      email: existingUser.email,
      token: accessToken,
      lastLogin: existingUser.lastLogin,
    };

    // Update lastLogin field
    await User.findOneAndUpdate(
      { _id: existingUser._id },
      { $set: { lastLogin: new Date().toISOString() } }
    );

    return res.status(200).json(userCredential);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "err.message" });
  }
}

const generateAccessToken = (user: any) => {
  return jwt.sign(
    { id: user._id || user.id, email: user.email },
    SECRET_ACCESS_KEY
  );
};
