import { findByCardId } from "../repositories/cardRepository.js";
import { findByApiKey } from "../repositories/companyRepository.js";
import { insert } from "../repositories/rechargeRepository.js";

export async function checkRechargeValue(id: number, value: number, token: string) {
    const card = await findByCardId(id)
    const company = await findByApiKey(token)
    if(!company){
        throw {type: "Not found"}
    }
    if(!card || card.isBlocked || new Date(card.expirationDate).getTime() < Date.now()|| value <= 0){
        throw {type: "Not found"}
    }
    insert({cardId: id, amount: value})
}