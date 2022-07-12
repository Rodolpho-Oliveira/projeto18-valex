import express,{json} from "express"
import "express-async-errors"
import dotenv from "dotenv"
import cors from "cors"
import cardRouter from "../routes/cardRouter.js"
import rechargeRouter from "../routes/rechargeRouter.js"
import balanceRouter from "../routes/balanceRouter.js"
import purchaseRouter from "../routes/purchaseRouter.js"
import { errorHandling } from "../middlewares/errorHandlerMiddleware.js"
dotenv.config()

const app = express()
app.use(cors())
app.use(json())

app.use(cardRouter)
app.use(rechargeRouter)
app.use(balanceRouter)
app.use(purchaseRouter)
app.use(errorHandling)

app.listen(process.env.PORT || 4000)