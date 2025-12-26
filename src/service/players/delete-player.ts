import * as httpResponse from '../../utils/http-code'
import {deletePlayer} from "../../repository/players-repository"

export const deletePlayerService = async (id:number) => {
    try{
        if(!id || id <= 0 ){
            return httpResponse.badRequest();
        }

        const deleted = await deletePlayer(id)

        if(!deleted){
            return httpResponse.notFound()
        }

        return httpResponse.noContent()

    }catch(error){
        console.error(error)
        return httpResponse.internalServerError()
    }

}




