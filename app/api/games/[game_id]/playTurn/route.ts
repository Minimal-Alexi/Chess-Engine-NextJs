import { playTurn } from "@/lib/games";
import { NextResponse } from "next/server";

export async function POST (req:Request,
    {params}:{params:{id:string}}
) {
    const body = await req.json();
    const response = await playTurn(Number(params.id),body.startCoords,body.endCoords)
    const data = await response.json();

    return NextResponse.json(data, {
        status: response.status,
    });
}