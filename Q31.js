//31.Write a function determineGameLevel that:
// • Takes a score as input.
// • Uses if-else if-else statements to determine the game level:
// ◦ "Beginner" for scores 0-49
// ◦ "Intermediate" for scores 50-79
// ◦ "Advanced" for scores 80-100
// • Return the level along with a motivational message.

function determineGameLevel(score) {
  let level;
  let message;

  if (score >= 0 && score <= 49) {
    level = "Beginner";
    message = "You're off to a good start! Keep practicing and you'll improve.";
  } else if (score >= 50 && score <= 79) {
    level = "Intermediate";
    message = "Great job! You're getting better. Keep pushing forward!";
  } else if (score >= 80 && score <= 100) {
    level = "Advanced";
    message = "Excellent work! You're at the top of your game!";
  } else {
    return "Invalid score. Please enter a score between 0 and 100.";
  }

  return `Level: ${level}. ${message}`;
}

console.log(determineGameLevel(85)); //  "Level: Advanced. Excellent work! You're at the top of your game!"
