import {Router} from "express"
import * as controller from "../controllers/player-controllers"

    const router = Router()

    router.get("/players", controller.getPlayer)
    router.get("/players/:id", controller.getPlayerById)


export default router
