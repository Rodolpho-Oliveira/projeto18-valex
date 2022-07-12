import {Request, Response, NextFunction} from "express"
import { generalCardUtil, passwordCardUtil } from "../utils/generalAuthUtils.js"

export async function unlockBlockMiddleware(req: Request, res: Response, next: NextFunction) {
    const {id, password} = req.body
    if(!id || !password){
        throw {type: "Wrong information"}
    }

    await generalCardUtil(id)
    await passwordCardUtil(id, password)

    next()
}