import { findPlayerById } from "../../repository/players-repository"
import * as httpResponse from "../../utils/http-code"

export const getPlayerByIdServices = async (id: number) => {

    try{
        if(!id || id <= 0){
            return httpResponse.badRequest()
        }

        const data = await findPlayerById(id);

        if(!data){
            return httpResponse.notFound()
        }

        return httpResponse.ok(data);

    }catch(error){
        console.error("Erro na busca do id: ", error)
        return httpResponse.internalServerError()
    }   

}