import { NextFunction, Request, Response } from "express"
import { findByTypeAndEmployeeId, TransactionTypes } from "../repositories/cardRepository.js"
import { findByApiKey } from "../repositories/companyRepository.js"
import { findById } from "../repositories/employeeRepository.js"

export async function createCardMiddleware(req: Request, res: Response, next: NextFunction) {
    const TokenApi:any = req.headers['x-api-key']
    const {employeeId, type}: {employeeId: number, type: TransactionTypes} = req.body
    const company = await findByApiKey(TokenApi)
    if(!TokenApi || !employeeId || !type){
        throw {type: "Need more infomation"}
    }
    if(!company){
        throw {type: "Company not found"}
    }
    const employeeValidation = await findById(employeeId)
    if(!employeeValidation){
        throw {type: "Employee not found"}
    }
    const employeeCardValidation = await findByTypeAndEmployeeId(type, employeeId)
    if(employeeCardValidation){
        throw {type: "Card alredy created"}
    }

    next()
}