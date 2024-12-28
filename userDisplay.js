// userDisplay.js

function showMessage(message) {
  console.log(message);
}


function showAnalysis(analysis) {
  showChallenge(analysis.challenge);
  if(analysis.hasSolution){
    showSolution(analysis.solution);
  }else{
    showMessage('No solution found');
  }
 
}

module.exports = { showMessage, showAnalysis };