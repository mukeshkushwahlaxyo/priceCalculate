import express from "express";
import adminRoutes from "./adminRoutes.js";

const routes = express.Router();

routes.use("/", adminRoutes);

export default routes;
