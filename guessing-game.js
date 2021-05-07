function guessingGame(number) {
  const correctNum = Math.floor(Math.random() * 100);
  let gameOver = false;
  let count = 0;
  return function guess(num) {
    if (gameOver) return "The game is over, you already won!";
    count++;
    if (num === correctNum) {
      gameOver = true;
      const guess = count === 1 ? "guess" : "guesses";
      return `You win! You found ${num} in ${count} ${guess}.`;
    }
    if (num < correctNum) {
      return `${num} is too low!`;
    }
    if (num > correctNum) {
      return `${num} is too high!`;
    }
  };
}

module.exports = { guessingGame };
