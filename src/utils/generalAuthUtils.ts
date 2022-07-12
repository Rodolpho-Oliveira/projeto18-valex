import { findByCardId } from "../repositories/cardRepository.js"
import bcrypt from "bcrypt"

export async function generalCardUtil(id: number) {
    const card = await findByCardId(id)
    if(!card){
        throw {type: "Card not found", status: 404}
    } 
    else if(new Date(card.expirationDate).getTime() < Date.now()){
        throw {type: "Card is invalid", status: 403}
    }
}

export async function passwordCardUtil(id: number, password: string) {
    const card = await findByCardId(id)
    if(!bcrypt.compareSync(password, card.password)){
        throw {type: "Wrong password", status: 401}
    }
}