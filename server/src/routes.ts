import { Router } from "express";
import articleController from "./controller/articleController.js";
import authController from "./controller/authController.js";
import commentController from "./controller/commentController.js";

const routes = Router();

routes.use('/articles', articleController);
routes.use('/auth', authController);
routes.use('/comments', commentController);

export default routes;