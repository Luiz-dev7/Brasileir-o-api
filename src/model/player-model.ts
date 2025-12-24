export interface PlayerModel {
    id: number;
    name:string;
    club:string;
    nationality:string;
    position:string;
    statics:{
        assistencias: number;
        gols:number;
        partidas:number;
    }
}