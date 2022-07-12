import {Response, Request, NextFunction} from "express"

export async function errorHandling(error: any, req: Request, res: Response, next: NextFunction) {
    return res.status(error.status).send(error.type)
}