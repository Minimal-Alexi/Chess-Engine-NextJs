export interface Game{
    id:number,
    turnCounter:number,
    state:{
        fen:string,
        board:string[][],
    }
    players:{
        white:{
            userId:number,
            username:string
        }
        black:{
            userId:number,
            username:string
        }
    }
} 