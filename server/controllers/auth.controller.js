import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

class AuthController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.json({ failure: "User not found!" });
      }
      const isVaildPassword = await bcrypt.compare(password, user.password);
      if (!isVaildPassword)
        return res.json({ failure: "Password is incorrect" });

      return res.json({ user });
    } catch (error) {
      next(error);
    }
  }
  async register(req, res, next) {
    try {
      const { email, password, fullName } = req.body;

      const user = await userModel.findOne({ email });
      if (user) return res.json({ failure: "User already exist" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await userModel.create({
        email,
        password: hashedPassword,
        fullName,
      });

      return res.json({ user: newUser });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
