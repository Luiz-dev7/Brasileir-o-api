import {Request, Response} from "express"
import {getPlayerService} from "../service/players/get-player-service"
import {getPlayerByIdServices} from "../service/players/get-player-by-id"
import {postPlayerService} from "../service/players/post-player"
import {deletePlayerService} from "../service/players/delete-player"
import {modifyPlayerService} from "../service/players/patch-player"


export const getPlayer = async (req:Request,res:Response) =>{
    const httpResponse = await getPlayerService()

    res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const getPlayerById = async (req:Request, res: Response) => {
    const id = parseInt(req.params.id)
    const httpResponse = await getPlayerByIdServices(id)

    res.status(httpResponse.statusCode).json(httpResponse.body)

}


export const insertPlayer =  async (req:Request, res:Response) =>{
    const body = req.body;
    const httpResponse = await postPlayerService(body)

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }

}   

export const deletePlayer = async (req:Request, res:Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await deletePlayerService(id)

    return res.status(httpResponse.statusCode).json(httpResponse.body)

}

export const findModifyPlayer = async (req:Request, res: Response) =>{

    const id = parseInt(req.params.id)
    const statics = req.body.statics
    const httpResponse = await modifyPlayerService(id, statics)

    return res.status(httpResponse.statusCode).json(httpResponse.body)

}

