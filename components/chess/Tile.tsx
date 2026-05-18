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

type SquareProps = {
  row: number;
  col: number;
  piece: string;
  size: number;
};

export const RenderSquare = ({ row, col, piece, size }: SquareProps) => {
  const isDark = (row + col) % 2 === 1;

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: isDark ? "#93452a" : "#b28a7c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {piece !== " " && (
        <Image
          src={pieceToImage[piece]}
          alt={piece}
          width={size}
          height={size}
        />
      )}
    </div>
  );
};