import fs from "fs/promises"
import { clubModel } from "../model/club-model"


const readDataBase = async ():Promise <clubModel[] > =>{
    const data = await fs.readFile("./src/data/club.json", "utf-8")
    return JSON.parse(data)
}


export const findAllClubes = async () => {
    const players =await readDataBase()
    return players
}



export const findClubById = async (id: number):Promise <clubModel |  undefined > => {
    const dataBase = await readDataBase()
    return dataBase.find( club => club.id === id )
}



