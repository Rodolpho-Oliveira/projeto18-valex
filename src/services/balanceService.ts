import { findByCardId } from "../repositories/cardRepository.js";
import { findPaymentByCardId } from "../repositories/paymentRepository.js";
import { findRechargesByCardId } from "../repositories/rechargeRepository.js";

export async function checkCardBalance(id: number) {
    const card = await findByCardId(id)
    if(!card){
        throw {type: "Card not found", status: 404}
    }
    const recharge: Array<any> = await findRechargesByCardId(id)
    const payment: Array<any> = await findPaymentByCardId(id)
    let amount: number = 0
    recharge.forEach(value => {
        amount += value.amount
    })
    payment.forEach(value => {
        amount -= value.amount
    })
    return {amount, recharge, payment}
}