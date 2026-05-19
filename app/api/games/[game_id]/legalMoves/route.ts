import { getMyLegalMoves } from "@/lib/games";
import { NextResponse } from "next/server";

export async function GET (req:Request,
    {params}:{params:{id:string}}
) {
    const body = await req.json();
    const response = await getMyLegalMoves(Number(params.id),body.position)
    const data = await response.json();

    return NextResponse.json(data, {
        status: response.status,
    });
}