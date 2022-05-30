import express from "express";
import adminController from '../controllers/adminController.js'
const routes = express.Router();

const {
  getPrice,  
} = adminController;

routes.get("/get_price/:currency",getPrice);

const adminRoutes = routes;

export default adminRoutes;
