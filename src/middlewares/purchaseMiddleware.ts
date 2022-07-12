import {Request, Response, NextFunction} from "express"
import { findBusinessById } from "../repositories/businessRepository.js"
import { findByCardId } from "../repositories/cardRepository.js"
import { checkCardBalance } from "../services/balanceService.js"
import { generalCardUtil, passwordCardUtil } from "../utils/generalAuthUtils.js"

    export async function purchaseAuthMiddleware(req: Request, res: Response, next: NextFunction) {
        const {cardId, password, businessId, amount}: {cardId: number, password: string, businessId: number, amount: number} = req.body
        const card = await findByCardId(cardId)
        const businesses = await findBusinessById(businessId)
        const balance = await checkCardBalance(cardId)
        if(card.isBlocked){
            throw {type: "Card is blocked"}
        }
        else if(amount <= 0){
            throw {type: "Insert a correct value"}
        }
        else if(!businesses){
            throw {type: "Select a correct businesses"}
        }
        else if(businesses.type !== card.type ){
            throw {type: "Select a correct businesses type"}
        }
        else if(balance.amount < amount){
            throw {type: "Not enough money"}
        }
        await generalCardUtil(cardId)
        await passwordCardUtil(cardId, password)
            
        next()
    }