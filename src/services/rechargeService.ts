import { generalCardUtil } from "../utils/generalAuthUtils.js";
import { findByCardId } from "../repositories/cardRepository.js";
import { findByApiKey } from "../repositories/companyRepository.js";
import { insert } from "../repositories/rechargeRepository.js";

export async function checkRechargeValue(id: number, value: number, token: string) {
    await generalCardUtil(id)
    const card = await findByCardId(id)
    const company = await findByApiKey(token)
    if(!company){
        throw {type: "Company not found"}
    }
    else if(card.isBlocked){
        throw {type: "Card is blocked"}
    }
    else if(value <= 0){
        throw {type: "Insert a correct value"}
    }
    await insert({cardId: id, amount: value})
}