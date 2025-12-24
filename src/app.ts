import  express, { Router }  from "express";
import cors from "cors"
import router from "./routes/routes"


export function createApp (){
    const server = express()

    server.use(express.json())
    server.use(cors())
    server.use("/api", router)


    //Swagger
    

    return server

} 


