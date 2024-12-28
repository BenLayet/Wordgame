function calculatePoints(word) {
  return word.length * word.length;
}

function sortByPointsAscending(words) {
  return words.sort((a, b) => calculatePoints(a) - calculatePoints(b));
}

module.exports = { calculatePoints, sortByPointsAscending };