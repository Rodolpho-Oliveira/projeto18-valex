import { Request, Response } from "express"
import { checkCardBalance } from "../services/balanceService.js"

export async function getCardBalance(req: Request, res: Response) {
    const {id}: {id:number} = req.body
    const {amount, recharge, payment}  = await checkCardBalance(id)
    res.status(200).send({balance: amount, transactions: payment, recharges: recharge})
}