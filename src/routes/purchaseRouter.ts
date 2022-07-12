import { Router } from "express";
import { makePurchase } from "../controllers/purchaseController.js";

const purchaseRouter = Router()

purchaseRouter.post("/payment", makePurchase)

export default purchaseRouter