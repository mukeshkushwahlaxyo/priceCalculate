import express from "express";
import morgan from "morgan";
import routes from "./api/v1/routes/index.js";
import cors from "cors";
import mongoose from "mongoose";
import responseHelper from "express-response-helper";
import bodyParser from "body-parser";


const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, content type, Authorization, Accept"
  );
  next();
});

app.use(cors());

app.use("/v1", routes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app;
