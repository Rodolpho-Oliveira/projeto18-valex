import {Response, Request, NextFunction} from "express"

export async function errorHandling(error: any, req: Request, res: Response, next: NextFunction) {
    if(error.status && error.type){
        return res.status(error.status).send(error.type)
    }
    res.sendStatus(500)
}