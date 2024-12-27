function rotateRowRight(grid, row) {
    let newGrid = grid.map(row => [...row]); // Copie profonde
    newGrid[row] = [grid[row][2], grid[row][0], grid[row][1]];
    return newGrid;
}

// Rotation vers la gauche d'une ligne
function rotateRowLeft(grid, row) {
    let newGrid = grid.map(row => [...row]); // Copie profonde
    newGrid[row] = [grid[row][1], grid[row][2], grid[row][0]];
    return newGrid;
}

// Rotation vers le bas d'une colonne
function rotateColumnDown(grid, col) {
    let newGrid = grid.map(row => [...row]); // Copie profonde
    let temp = grid[2][col];
    newGrid[2][col] = grid[1][col];
    newGrid[1][col] = grid[0][col];
    newGrid[0][col] = temp;
    return newGrid;
}

// Rotation vers le haut d'une colonne
function rotateColumnUp(grid, col) {
    let newGrid = grid.map(row => [...row]); // Copie profonde
    let temp = grid[0][col];
    newGrid[0][col] = grid[1][col];
    newGrid[1][col] = grid[2][col];
    newGrid[2][col] = temp;
    return newGrid;
}

module.exports = {
  rotateRowRight,
  rotateRowLeft,
  rotateColumnDown,
  rotateColumnUp
};