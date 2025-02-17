import { Router } from "express";
import auth from "./auth.js";
import otp from "./otp.js";

const router = Router();

router.use("/auth", auth);
router.use("/otp", otp);

export default router;
