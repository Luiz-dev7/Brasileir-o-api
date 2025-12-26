import { findAllClubes } from "../../repository/clube-repository";
import * as httpResponse from "../../utils/http-code"


export const getClubService = async () => {
    try{
        const data = await findAllClubes();

        return httpResponse.ok(data)
    }catch(error){
        console.error(error)
        return httpResponse.internalServerError()
    }

}

