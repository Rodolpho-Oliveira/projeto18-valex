import dayjs from "dayjs"
import dotenv from "dotenv"
import Cryptr from "cryptr"
import bcrypt from "bcrypt"
import { findByCardId, insert, TransactionTypes, update } from "../repositories/cardRepository.js"
import { findById } from "../repositories/employeeRepository.js"
import { faker } from "@faker-js/faker"
dotenv.config()

export async function checkNewCard(type: TransactionTypes, employeeId: number) {
    const employeeValidation = await findById(employeeId)
    const number = faker.finance.creditCardNumber()
    const splitedName: Array<any> = employeeValidation.fullName.split(" ")
    let cardholderName = ""
    if(splitedName.length <= 2){
        cardholderName = employeeValidation.fullName.toUpperCase()
    }else{
        cardholderName += splitedName[0].toUpperCase() + " "
    for(let i = 1; i < splitedName.length - 1; i++){
        if(splitedName[i].length >= 3){
        cardholderName += (splitedName[i].slice(0,1).toUpperCase()) + " "
        }
    }
    cardholderName += splitedName[splitedName.length-1].toUpperCase()
    }
    const expirationDate: string = dayjs().add(5, "year").format("MM/YYYY")
    const cvv = new Cryptr("123")
    const securityCode: string = cvv.encrypt(process.env.CVV_CODE)

    await insert({employeeId,number, cardholderName,securityCode,expirationDate,isVirtual: false,isBlocked: true,type: type})
}

export async function checkCardActivation(id: number, password: string) {
    const passwordHash = bcrypt.hashSync(password, 10)
    await update(id, {password: passwordHash, isBlocked: false})
}

export async function checkIsBlocked(id: number) {
    const card = await findByCardId(id)
    if(card.isBlocked){
        throw {type:"Card alredy blocked", status: 406}
    }
    update(id, {isBlocked: true})
}

export async function checkIsUnlocked(id: number) {
    const card = await findByCardId(id)
    if(!card.isBlocked){
        throw {type:"Card alredy unlocked", status: 406}
    }
    update(id, {isBlocked: false})
}