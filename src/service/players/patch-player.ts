import * as httpResponse from "../../utils/http-code"
import { findModifyPlayer } from "../../repository/players-repository"


export const modifyPlayerService = async (id:number, statics:staticsModel) => {

    try{
        if(!id || id <= 0){
            return httpResponse.badRequest()
        }

        if(!statics || Object.keys(statics).length === 0 ){
            return httpResponse.badRequest()
        }

        const data = await findModifyPlayer(id, statics);

        if(!data){
            return httpResponse.notFound()
        }

        return httpResponse.ok(data)


    }catch(error){
        console.error(error)
        return httpResponse.internalServerError()
    }


}




