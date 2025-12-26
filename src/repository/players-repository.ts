import {PlayerModel} from "../model/player-model"
import fs from "fs/promises"

const readDataBase = async ():Promise <PlayerModel[] > =>{
    const data = await fs.readFile("./src/data/players.json", "utf-8")
    return JSON.parse(data)
}

const writeDataBase = async (data:PlayerModel[]) =>{
    await fs.writeFile("./src/data/players.json", JSON.stringify(data, null, 2))
}


export const findAllPlayers = async () => {
    const players =await readDataBase()
    return players
}

export const findPlayerById = async (id: number):Promise <PlayerModel |  undefined > => {
    const dataBase = await readDataBase()
    return dataBase.find( player => player.id === id )
}

export const insertPlayer = async (player: PlayerModel ) => {
    const dataBase = await readDataBase();
    dataBase.push(player)
    await writeDataBase(dataBase)
}

export const deletePlayer = async (id: number) => {
    const dataBase = await readDataBase();
    const index = dataBase.findIndex( player => player.id === id)

    if(index === -1) return false

    dataBase.splice(index, 1)
    await writeDataBase(dataBase);
    return true
}

export const findModifyPlayer = async (id: number, statics:staticsModel): Promise <PlayerModel | undefined> => {
    const dataBase = await readDataBase()
    const index = dataBase.findIndex( player => player.id === id)

    if(index === -1)return undefined

    dataBase[index].statics
    await writeDataBase(dataBase);

    return dataBase[index]
}

