import { playTurn } from "@/lib/games";
import { NextResponse } from "next/server";

export async function POST (req:Request,
    {params}:{params:{game_id:string}}
) {
    const {game_id} = await params;
    const body = await req.json();
    const response = await playTurn(Number(game_id),body.startCoords,body.endCoords)
    const data = await response.json();

    return NextResponse.json(data, {
        status: response.status,
    });
}