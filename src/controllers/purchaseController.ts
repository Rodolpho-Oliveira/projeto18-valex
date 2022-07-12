import { Request, Response } from "express";
import { checkPurchase } from "../services/purchaseService.js";

export async function makePurchase(req: Request, res: Response) {
    const {cardId, password, businessId, amount}: {cardId: number, password: string, businessId: number, amount: number} = req.body
    await checkPurchase(cardId, password, businessId, amount)
    res.sendStatus(200)
}