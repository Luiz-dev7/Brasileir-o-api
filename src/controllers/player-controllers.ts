import {Request, Response} from "express"
import {getPlayerService} from "../service/players/get-player-service"
import {getPlayerByIdServices} from "../service/players/get-player-by-id"


export const getPlayer = async (req:Request,res:Response) =>{
    const httpResponse = await getPlayerService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const getPlayerById = async (req:Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await getPlayerByIdServices(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)

}