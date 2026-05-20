import { getMyLegalMoves } from "@/lib/games";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { game_id: string } }
) {
    const { game_id } = await params
    const { searchParams } = new URL(req.url);

    const x = Number(searchParams.get("x"));
    const y = Number(searchParams.get("y"));


    const response = await getMyLegalMoves(Number(game_id), [x, y]);
    const data = await response.json();

    return NextResponse.json(data, {
        status: response.status,
    });
}