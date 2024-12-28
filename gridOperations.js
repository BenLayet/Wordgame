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


// Fonction de recherche avec profondeur limitée
function solve(grid, target, depth, maxDepth) {
    if (canSpell(grid, target)) return { found: true, moves: [], finalGrid: grid };

    if (depth === maxDepth) return { found: false, moves: [] };

    let operations = [
        { type: "rotateRowRight", func: rotateRowRight },
        { type: "rotateRowLeft", func: rotateRowLeft },
        { type: "rotateColumnDown", func: rotateColumnDown },
        { type: "rotateColumnUp", func: rotateColumnUp }
    ];

    for (let i = 0; i < 3; i++) {
        for (let op of operations) {
            let newGrid = op.func(grid, i);
            let result = solve(newGrid, depth + 1, maxDepth);

            if (result.found) {
                result.moves.unshift({ action: op.type, index: i, resultingGrid: newGrid});
                result.finalGrid = newGrid;
                return result;
            }
        }
    }

    return { found: false, moves: [] };
}
function create3x3Grid(gridLetters) {
    if (gridLetters.length !== 9) {
        throw 'Grid letters must contain exactly 9 elements.';
    }
    let grid = [];
    for (let i = 0; i < 3; i++) {
        grid.push(gridLetters.slice(i * 3, i * 3 + 3).split(''));
    }
    return grid;
}
function analyse(gridLetters, target, maxMoves){
  const initialGrid = create3x3Grid(gridLetters);
  return {
    challenge:{
      initialGrid,
      target,
      maxMoves
    },
    solution: solve(initialGrid, target, 0, maxMoves)
  };
}
module.exports = {
  analyse 
};