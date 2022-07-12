import { Router } from "express"
import { activateCard, createNewCard, blockCard, unlockCard } from "../controllers/cardController.js"
import { createCardMiddleware } from "../middlewares/createCardMiddleware.js"

const cardRouter = Router()

cardRouter.post("/create", createCardMiddleware,createNewCard)
cardRouter.post("/active", activateCard)
cardRouter.post("/block", blockCard)
cardRouter.post("/unlock", unlockCard)

export default cardRouter