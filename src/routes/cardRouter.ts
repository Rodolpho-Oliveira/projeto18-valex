import { Router } from "express"
import { activateCard, createNewCard, blockCard, unlockCard } from "../controllers/cardController.js"

const cardRouter = Router()

cardRouter.post("/create", createNewCard)
cardRouter.post("/active", activateCard)
cardRouter.post("/block", blockCard)
cardRouter.post("/unlock", unlockCard)

export default cardRouter