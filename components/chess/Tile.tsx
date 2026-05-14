const pieceToImage: Record<string, string> = {
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

import Image from "next/image";

export const RenderSquare = (row:number, col:number, piece: string) => {
    const isDark = (row + col) % 2 === 1;
    const isPiece = piece != ' '
    

    return (
      <div
        key={`${row}-${col}`}
        style={{
          width: 100,
          height: 100,
          backgroundColor: isDark ? "#93452a" : "b28a7c",
        }}>
                  {piece && piece !== " " && (
        <Image
          src={pieceToImage[piece]}
          alt={piece}
          width={100}
          height={100}
        />
      )}
        </div>
    );
  };