import { authFetch } from "./wrappers";

const apiURL = process.env.API_URL;

export async function getAllMyGames(){
    return authFetch(`${apiURL}/api/v1/games`);
}

export async function getMyGame(id:number){
    return authFetch(`${apiURL}/api/v1/games/${id}`);
}

export async function getMyLegalMoves(id:number, position:[number,number]){
    return authFetch(`${apiURL}/api/v1/games/${id}/legalMoves?x=${position[0]}&y=${position[1]}`,"GET")
}

export async function playTurn(id:number, startCoords:[number,number], endCoords:[number,number]){
    return authFetch(`${apiURL}/api/v1/games/${id}/playTurn`,"POST",{startCoords:startCoords, endCoords:endCoords})
}