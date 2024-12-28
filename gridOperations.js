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

function canSpell(grid, target) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1], // Top-left, Top, Top-right
        [0, -1],         [0, 1],    // Left,       Right
        [1, -1], [1, 0], [1, 1]     // Bottom-left, Bottom, Bottom-right
    ];

    function isValid(x, y, visited) {
        return x >= 0 && x < 3 && y >= 0 && y < 3 && !visited[x][y];
    }

    function dfs(x, y, index, visited) {
        if (index === target.length) return true; // If all letters are matched

        visited[x][y] = true;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (
                isValid(nx, ny, visited) &&
                grid[nx][ny] === target[index] &&
                dfs(nx, ny, index + 1, visited)
            ) {
                return true;
            }
        }

        visited[x][y] = false; // Backtrack
        return false;
    }

    // Find all starting points for the first letter of the target
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i][j] === target[0]) {
                const visited = Array.from({ length: 3 }, () => Array(3).fill(false));
                if (dfs(i, j, 1, visited)) return true;
            }
        }
    }

    return false;
}

module.exports = {
  rotateRowRight,
  rotateRowLeft,
  rotateColumnDown,
  rotateColumnUp,
  canSpell 
};