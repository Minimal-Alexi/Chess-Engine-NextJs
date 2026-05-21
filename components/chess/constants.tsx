export const pieceToImage: Record<string, string> = {
  K: "/pieces/wk.png",
  Q: "/pieces/wq.png",
  R: "/pieces/wr.png",
  B: "/pieces/wb.png",
  N: "/pieces/wn.png",
  P: "/pieces/wp.png",

  k: "/pieces/bk.png",
  q: "/pieces/bq.png",
  r: "/pieces/br.png",
  b: "/pieces/bb.png",
  n: "/pieces/bn.png",
  p: "/pieces/bp.png",
};

export enum TileType {
    WHITE_TILE = "WHITE_TILE",
    BLACK_TILE = "BLACK_TILE",
    WHITE_TILE_HIGHLIGHTED = "WHITE_TILE_HIGHLIGHTED",
    BLACK_TILE_HIGHLIGHTED = "BLACK_TILE_HIGHLIGHTED"

}

export const stringToColor: Record<string,string> = {
    WHITE_TILE: "#e3d4cf",
    WHITE_TILE_HIGHLIGHTED:"#d27c60",
    BLACK_TILE: "#93452a",
    BLACK_TILE_HIGHLIGHTED:"#c75c38",
}