// userDisplay.js

function showMessage(message) {
  console.log(message);
}

function showGrid(grid){
    showMessage(grid.map(row => row.join(' ')).join('\n'));
    showMessage('---------------')
}

function showChallenge(challenge) {
  showMessage(`Challenge:`);
  showMessage ('Initial Grid:');
  showGrid(challenge.initialGrid);
  showMessage(`target: ${challenge. target}`);
}

function showSolution(solution) {
  showMessage(`Solution:`);

for (let move of solution.moves) {
        if (move.action === "rotateRowRight") {
            grid = rotateRowRight(grid, move.index);
            console.log(`Action : Rotation droite de la ligne ${move.index + 1}`);
        } else if (move.action === "rotateRowLeft") {
            grid = rotateRowLeft(grid, move.index);
            console.log(`Action : Rotation gauche de la ligne ${move.index + 1}`);
        } else if (move.action === "rotateColumnDown") {
            grid = rotateColumnDown(grid, move.index);
            console.log(`Action : Rotation bas de la colonne ${move.index + 1}`);
        } else if (move.action === "rotateColumnUp") {
            grid = rotateColumnUp(grid, move.index);
            console.log(`Action : Rotation haut de la colonne ${move.index + 1}`);
        }
        displayGrid(grid);
    }
}



function showAnalysis(analysis) {
  showChallenge(analysis.challenge);
  if (analysis.hasSolution) {
    showSolution(analysis.solution);
  } else {
    showMessage('No solution found');
  }
}

module.exports = { showMessage, showAnalysis };