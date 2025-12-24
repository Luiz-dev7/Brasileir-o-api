import {findAllPlayers} from "../../repository/players-repository"
import * as httpRespose from "../../utils/http-code"

export const getPlayerService = async () => {
    try{
        const data = await findAllPlayers();

        return httpRespose.ok(data)
    }catch(error){
        console.error(error)
        return httpRespose.internalServerError()
    }

}