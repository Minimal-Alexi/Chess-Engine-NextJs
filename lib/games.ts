import { authFetch } from "./wrappers";

const apiURL = process.env.API_URL;

export async function getAllMyGames(){
    return authFetch(`${apiURL}/api/v1/games`);
}