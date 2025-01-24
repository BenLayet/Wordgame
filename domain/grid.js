class Grid {
    constructor() {
        this.cells = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCell(row, col) {
        return this.cells[row][col];
    }

    setCell(row, col, value) {
        this.cells[row][col] = value;
    }

    isFull() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.cells[row][col] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    rotateRowLeft(row) {
        const temp = this.cells[row][0];
        this.cells[row][0] = this.cells[row][1];
        this.cells[row][1] = this.cells[row][2];
        this.cells[row][2] = temp;
    }

    rotateRowRight(row) {
        const temp = this.cells[row][2];
        this.cells[row][2] = this.cells[row][1];
        this.cells[row][1] = this.cells[row][0];
        this.cells[row][0] = temp;
    }

    rotateColumnUp(col) {
        const temp = this.cells[0][col];
        this.cells[0][col] = this.cells[1][col];
        this.cells[1][col] = this.cells[2][col];
        this.cells[2][col] = temp;
    }   

    rotateColumnDown(col) {
        const temp = this.cells[2][col];
        this.cells[2][col] = this.cells[1][col];
        this.cells[1][col] = this.cells[0][col];
        this.cells[0][col] = temp;
    }

    canSpell(target) {
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
                    this.cells[nx][ny] === target[index] &&
                    dfs(nx, ny, index + 1, visited)
                ) {
                    return true;
                }
            }

            visited[x][y] = false; // Backtrack
            return false;
        }

        const visited = [
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ];

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (this.cells[row][col] === target[0] && dfs(row, col, 1, visited)) {
                    return true;
                }
            }
        }

        return false;
    }

    clone() {
        const newGrid = new Grid();
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                newGrid.cells[row][col] = this.cells[row][col];
            }
        }
        return newGrid;
    }

    toString() {
        return this.cells.map(row => row.join('')).join('\n');
    }   

    static fromString(str) {
        const grid = new Grid();
        const rows = str.split('\n');
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                grid.cells[row][col] = rows[row][col];
            }
        }
        return grid;
    }


        
}