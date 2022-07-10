import dayjs from "dayjs"
import cryptr from "cryptr"
import { findByTypeAndEmployeeId, insert, TransactionTypes } from "../repositories/cardRepository.js"
import { findByApiKey } from "../repositories/companyRepository.js"
import { findById } from "../repositories/employeeRepository.js"
import { faker } from "@faker-js/faker"

export async function checkNewCard(token: string, type: TransactionTypes, employeeId: number) {
    const company = await findByApiKey(token)
    if(!company){
        throw {type: "notFound"}
    }
    const employeeValidation = await findById(employeeId)
    if(!employeeValidation){
        throw {type: "Unauthorized"}
    }
    const employeeCardValidation = await findByTypeAndEmployeeId(type, employeeId)
    if(employeeCardValidation){
        throw {type: "Conflict"}
    }

    const number = faker.finance.creditCardNumber()

    const splitedName: Array<any> = employeeValidation.fullName.split(" ")
    let cardholderName = ""
    if(splitedName.length <= 2){
        cardholderName = employeeValidation.fullName.toUpperCase()
    }else{
        cardholderName += splitedName[0].toUpperCase() + " "
    for(let i = 1; i < splitedName.length - 1; i++){
        cardholderName += (splitedName[i].slice(0,1).toUpperCase()) + " "
    }
    cardholderName += splitedName[splitedName.length-1].toUpperCase()
    }
    const expirationDate: string = dayjs().add(5, "year").format("MM/YYYY")
    const securityCode: string = cryptr.encrypt(faker.finance.creditCardCVV())
    
    const cardData = {employeeId,number, cardholderName,securityCode,expirationDate,password: null,isVirtual: false,originalCardId: null,isBlocked: true,type}
    const teste = await insert(cardData)
    console.log(teste)
    return true
}