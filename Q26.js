// 26.Write a function checkVotingEligibility that:
// • Takes an age as input.
// •  check if the person is eligible to vote (age 18 or older).
// • Returns "Eligible to vote" if age is 18 or above, otherwise returns "Not eligible to vote".

function checkVotingEligibility(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return "Not eligible to vote";
  }
}

console.log(checkVotingEligibility(20)); //  "Eligible to vote"
console.log(checkVotingEligibility(16)); //  "Not eligible to vote"
