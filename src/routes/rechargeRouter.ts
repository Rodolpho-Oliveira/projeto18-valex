import { Router } from "express";
import { rechargeCard } from "../controllers/rechargeController.js";

const rechargeRouter = Router()

rechargeRouter.post("/recharge", rechargeCard)

export default rechargeRouter