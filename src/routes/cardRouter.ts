import { Router } from "express"
import { createNewCard } from "../controllers/cardController.js"

const cardRouter = Router()

cardRouter.post("/create", createNewCard)

export default cardRouter