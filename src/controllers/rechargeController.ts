import { Request, Response} from "express";
import { checkRechargeValue } from "../services/rechargeService.js";

export async function rechargeCard(req: Request, res: Response) {
    const {id, value} = req.body
    const TokenApi:any = req.headers['x-api-key']
    await checkRechargeValue(id, value, TokenApi)
    res.sendStatus(200)
}