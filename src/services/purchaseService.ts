import bcrypt from "bcrypt"
import { findByCardId } from "../repositories/cardRepository.js"
import { findBusinessById } from "../repositories/businessRepository.js"
import { checkCardBalance } from "./balanceService.js"
import { insert } from "../repositories/paymentRepository.js"

export async function checkPurchase(cardId: number, password: string, businessId: number, amount: number) {
    const card = await findByCardId(cardId)
    const businesses = await findBusinessById(businessId)
    const balance = await checkCardBalance(cardId)
    if(!card || new Date(card.expirationDate).getTime() < Date.now()|| card.isBlocked || !bcrypt.compareSync(password, card.password)|| amount <= 0 || businesses.type !== card.type || !businesses || balance.amount < amount){
        throw {type: "Not found"}
    }

    await insert({amount, cardId, businessId})
}