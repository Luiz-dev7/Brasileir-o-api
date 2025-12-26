import {Request, Response} from "express"
import {getClubService} from "../service/clube/get-club"
import {getClubByIdServices} from "../service/clube/get-club-by-id"

export const getClub = async (req:Request, res:Response) => {
    const httpResponse = await getClubService()

    return res.status(httpResponse.statusCode).json(httpResponse.body)
}


export const getClubById = async (req:Request, res: Response) =>{
    const id = parseInt(req.params.id)
    const httpResponse = await getClubByIdServices(id)

    return res.status(httpResponse.statusCode).json(httpResponse.body)

}