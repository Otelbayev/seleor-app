import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
import errorMiddleware from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();

// MiddleWare
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.urlencoded({ extended: false }));

// Routes

app.use("/api", router);

//Error handling

app.use(errorMiddleware);

const bootstrap = async () => {
  try {
    const PORT = process.env.PORT || 4000;
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Connected to mongodb"));

    app.listen(PORT, () => {
      console.log(`Server is running ${PORT} PORT`);
    });
  } catch (e) {
    console.log("MongoDB error " + e);
  }
};

bootstrap();
