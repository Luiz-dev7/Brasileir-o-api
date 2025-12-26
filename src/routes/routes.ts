import {Router} from "express"
import * as controller from "../controllers/player-controllers"
import * as clube from "../controllers/club-controllers"




    const router = Router()

    router.get("/players", controller.getPlayer)
    router.get("/players/:id", controller.getPlayerById)
    router.post("/players",controller.insertPlayer )
    router.delete("/players/:id", controller.deletePlayer)
    router.patch("/players/:id", controller.findModifyPlayer)
    router.get("/clubes",clube.getClub)
    router.get("/clubes/:id", clube.getClubById)


export default router
