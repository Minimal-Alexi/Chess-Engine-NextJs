"use client";

import Image from "next/image";
import { useContext, useEffect } from "react";
import { pieceToImage, stringToColor, TileType } from "../constants";
import { ActiveChessContext } from "../../../context/activeChessContext";

type SquareProps = {
    row: number;
    col: number;
    piece: string;
    size: number;
};

export const RenderSquareInteractive = ({
    row,
    col,
    piece,
    size,
}: SquareProps) => {
    const ctx = useContext(ActiveChessContext);

    if (!ctx) return null;

    const {
        selectedSquare,
        setSelection,
        clearSelection,
        highlightedSquares,
        loadHighlightedSquares,
        clearHighlightedSquares,
        onClickDestination,
    } = ctx;

    const isDark = (row + col) % 2 === 1;

    const isSelected =
        selectedSquare?.[0] === row && selectedSquare?.[1] === col;

    const isHighlighted =
        highlightedSquares?.some(
            ([r, c]) => r === row && c === col
        ) ?? false;

    useEffect(() => {
        if (isSelected) {
            loadHighlightedSquares();
        }
    }, [isSelected, loadHighlightedSquares]);

    const handleClick = async () => {
        // If a square is already selected and this is a valid destination → move
        if (selectedSquare && !isSelected) {
            const isLegal = isHighlighted;

            if (isLegal) {
                await onClickDestination(row, col);
                return;
            }
        }

        // Otherwise select / toggle selection
        if (isSelected) {
            clearSelection();
            clearHighlightedSquares();
            return;
        }

        setSelection(row, col);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                width: size,
                height: size,
                backgroundColor: isHighlighted
                    ? "#90ee90"
                    : isSelected
                        ? "#ffd700"
                        : isDark
                            ? stringToColor[TileType.WHITE_TILE]
                            : stringToColor[TileType.BLACK_TILE],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
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