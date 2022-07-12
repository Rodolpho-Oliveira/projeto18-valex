import { Router } from "express"
import { activateCard, createNewCard, blockCard, unlockCard } from "../controllers/cardController.js"
import { activateMiddleware } from "../middlewares/activateCardMiddleware.js"
import { createCardMiddleware } from "../middlewares/createCardMiddleware.js"
import { unlockBlockMiddleware } from "../middlewares/unlockBlockCardMiddleware.js"

const cardRouter = Router()

cardRouter.post("/create", createCardMiddleware,createNewCard)
cardRouter.post("/active", activateMiddleware, activateCard)
cardRouter.post("/block", unlockBlockMiddleware, blockCard)
cardRouter.post("/unlock", unlockBlockMiddleware, unlockCard)

export default cardRouter