import { insert } from "../repositories/paymentRepository.js"

export async function checkPurchase(cardId: number, businessId: number, amount: number) {
    await insert({amount, cardId, businessId})
}