import express,{json} from "express"
import "express-async-errors"
import cors from "cors"
import cardRouter from "../routes/cardRouter.js"
import { errorHandling } from "../middlewares/errorHandlerMiddleware.js"

const app = express()
app.use(cors())
app.use(json())

app.use(cardRouter)
app.use(errorHandling)

app.listen(4000)