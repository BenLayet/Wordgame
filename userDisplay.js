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
  showMessage(`Solution: ${solution}`);
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