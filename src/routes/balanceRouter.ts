import { Router } from "express";
import { getCardBalance } from "../controllers/balanceController.js";

const balanceRouter = Router()

balanceRouter.get("/balance", getCardBalance)

export default balanceRouter