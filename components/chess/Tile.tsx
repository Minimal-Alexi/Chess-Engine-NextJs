export const RenderSquare = (row:number, col:number) => {
    const isDark = (row + col) % 2 === 1;

    return (
      <div
        key={`${row}-${col}`}
        style={{
          width: 100,
          height: 100,
          backgroundColor: isDark ? "#93452a" : "b28a7c",
        }}></div>
    );
  };