import { Router } from "express";
import { makePurchase } from "../controllers/purchaseController.js";
import { purchaseAuthMiddleware } from "../middlewares/purchaseMiddleware.js";

const purchaseRouter = Router()

purchaseRouter.post("/payment", purchaseAuthMiddleware, makePurchase)

export default purchaseRouter