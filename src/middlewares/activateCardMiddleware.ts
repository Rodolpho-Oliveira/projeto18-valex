import { NextFunction, Request, Response } from "express"
import Cryptr from "cryptr"
import dotenv from "dotenv" 
import { findByCardId } from "../repositories/cardRepository.js"
import { generalCardUtil } from "../utils/generalAuthUtils.js"
dotenv.config()

export async function activateMiddleware(req: Request, res: Response, next: NextFunction) {
    const {id, password, securityCode} = req.body
    const card = await findByCardId(id)
    const cvv = new Cryptr(process.env.CVV_CODE).decrypt(card.securityCode)
    await generalCardUtil(id)
    if(card.password){
        throw {type: "Card is alredy active", status: 409}
    }
    else if(securityCode !== cvv){
        throw {type: "Security code invalid", status: 401}
    }
    else if(password.length !== 4){
        throw {type: "Wrong password", status: 401}
    }

    next()
}