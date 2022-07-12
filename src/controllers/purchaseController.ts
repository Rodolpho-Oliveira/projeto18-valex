import { Request, Response } from "express";
import { checkPurchase } from "../services/purchaseService.js";

export async function makePurchase(req: Request, res: Response) {
    const {cardId, businessId, amount}: {cardId: number, password: string, businessId: number, amount: number} = req.body
    await checkPurchase(cardId, businessId, amount)
    res.sendStatus(200)
}