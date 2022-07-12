import {Request, Response, NextFunction} from "express"
import { findByCardId } from "../repositories/cardRepository.js"
import { generalCardMiddleware, passwordCardMiddleware } from "../utils/generalAuthUtils.js"

export async function unlockBlockMiddleware(req: Request, res: Response, next: NextFunction) {
    const {id, password} = req.body
    if(!id || !password){
        throw {type: "Wrong information"}
    }

    await generalCardMiddleware(id)
    await passwordCardMiddleware(id, password)

    const card = await findByCardId(id)
    
    next()
}