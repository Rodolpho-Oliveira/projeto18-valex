import { NextFunction, Request, Response } from "express"
import Cryptr from "cryptr"
import dotenv from "dotenv" 
import { findByCardId } from "../repositories/cardRepository.js"
dotenv.config()

export async function activateMiddleware(req: Request, res: Response, next: NextFunction) {
    const {id, password, securityCode} = req.body
    const card = await findByCardId(id)
    const cvv = new Cryptr(process.env.CVV_CODE).decrypt(card.securityCode)
    if(!card){
        throw {type:"Card not found"}
    } 
    else if(new Date(card.expirationDate).getTime() < Date.now()){
        throw {type: "Card is invalid"}
    } 
    else if(card.password){
        throw {type: "Card is alredy active"}
    }
    else if(securityCode !== cvv){
        throw {type: "Security code invalid"}
    }
    else if(password.length !== 4){
        throw {type: "Wrong password"}
    }

    next()
}