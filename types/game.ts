import { Player } from "./player"

export interface Game{
    id:number,
    turnCounter:number,
    state:{
        fen:string,
        board:string[][],
    }
    players:{
        white:Player,
        black:Player,
    }
} 