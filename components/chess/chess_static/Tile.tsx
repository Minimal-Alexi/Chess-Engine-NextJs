import Image from "next/image";
import { pieceToImage } from "../constants";

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