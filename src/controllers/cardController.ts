import {Request, Response} from "express"
import { TransactionTypes } from "../repositories/cardRepository.js"
import { checkCardActivation, checkIsBlocked, checkIsUnlocked, checkNewCard } from "../services/cardService.js"

export async function createNewCard(req: Request, res: Response) {
    const TokenApi:any = req.headers['x-api-key']
    const {employeeId, type}: {employeeId: number, type: TransactionTypes} = req.body
    if(!TokenApi || !employeeId || !type){
        throw {type: "notFound"}
    }
    const promise:boolean = await checkNewCard(TokenApi, type, employeeId)
    if(!promise){
        throw {type: "Permission denied"}
    }
    res.sendStatus(201)
}

export async function activateCard(req: Request, res: Response) {
    const {id, securityCode, password} = req.body
    await checkCardActivation(id, securityCode, password)
    res.sendStatus(200)
}

export async function blockCard(req: Request, res: Response) {
    const {id, password} = req.body
    if(!id || !password){
        throw {type: "Unauthorized"}
    }
    await checkIsBlocked(id, password)
    res.sendStatus(200)
}

export async function unlockCard(req: Request, res: Response) {
    const {id, password} = req.body
    if(!id || !password){
        throw {type: "Unauthorized"}
    }
    await checkIsUnlocked(id, password)
    res.sendStatus(200)
}