import {Request, Response} from "express"
import { TransactionTypes } from "../repositories/cardRepository.js"
import { checkNewCard } from "../services/cardService.js"

export async function createNewCard(req: Request, res: Response) {
        const TokenApi:any = req.headers['x-api-key']
        const {employeeId, cardType}: {employeeId: number, cardType: TransactionTypes} = req.body
        if(!TokenApi || !employeeId || !cardType){
            throw {type: "notFound"}
        }
        const promise:boolean = await checkNewCard(TokenApi, cardType, employeeId)
        if(!promise){
            throw {type: "Permission denied"}
        }
        res.sendStatus(200)
}