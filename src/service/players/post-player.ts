import { PlayerModel } from "../../model/player-model";
import { insertPlayer} from "../../repository/players-repository"
import * as httpResponse from "../../utils/http-code"


    export const postPlayerService = async (player: PlayerModel) =>{
        try{
            if(!player || Object.keys(player).length === 0){
                return httpResponse.badRequest()
            }
            await insertPlayer(player);

            return httpResponse.created()

        }catch(error){
            console.error(`Erro ao criar esse jogador ${error}`) 
            return httpResponse.internalServerError()
        }


    }

