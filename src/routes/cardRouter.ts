import { Router } from "express"
import { activateCard, createNewCard } from "../controllers/cardController.js"

const cardRouter = Router()

cardRouter.post("/create", createNewCard)
cardRouter.post("/active", activateCard)

export default cardRouter