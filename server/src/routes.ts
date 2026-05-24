import { Router } from "express";
import articleController from "./controller/articleController.js";
import authController from "./controller/authController.js";

const routes = Router();

routes.use('/articles', articleController);
routes.use('/auth', authController);

export default routes;