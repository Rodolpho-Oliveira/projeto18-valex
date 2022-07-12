import {Request, Response} from "express"
import { TransactionTypes } from "../repositories/cardRepository.js"
import { checkCardActivation, checkIsBlocked, checkIsUnlocked, checkNewCard } from "../services/cardService.js"

export async function createNewCard(req: Request, res: Response) {
    const {employeeId, type}: {employeeId: number, type: TransactionTypes} = req.body
    await checkNewCard(type, employeeId)
    res.sendStatus(201)
}

export async function activateCard(req: Request, res: Response) {
    const {id, password} = req.body
    await checkCardActivation(id, password)
    res.sendStatus(200)
}

export async function blockCard(req: Request, res: Response) {
    const {id} = req.body
    await checkIsBlocked(id)
    res.sendStatus(200)
}

export async function unlockCard(req: Request, res: Response) {
    const {id} = req.body
    await checkIsUnlocked(id)
    res.sendStatus(200)
}