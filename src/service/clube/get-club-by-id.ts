import * as httpResponse from "../../utils/http-code"
import {findClubById} from "../../repository/clube-repository"


export const getClubByIdServices = async (id: number) => {

    try{
        if(!id || id <= 0){
            return httpResponse.badRequest()
        }

        const data = await findClubById(id);

        if(!data){
            return httpResponse.notFound()
        }

        return httpResponse.ok(data);

    }catch(error){
        console.error("Erro na busca do id: ", error)
        return httpResponse.internalServerError()
    }   

}