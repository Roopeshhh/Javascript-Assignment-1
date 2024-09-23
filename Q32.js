// 32.Write a function validatePassword that:
// • Takes a password string as input.
// • Uses statements to validate the password:
// • At least 8 characters: "Valid"
// • Contains uppercase letters: "Valid"
// • Contains lowercase letters: "Valid"
// • Contains numbers: "Valid"
// • Contains special characters: "Valid"
// • Return "Password is strong" if all criteria are met; otherwise, return a message indicating
// which criteria are not met.

function validatePassword(password) {
  let isValid = true;
  let message = "Password is strong";

  // Initialize flags for each validation criteria
  let hasMinLength = false;
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  // Check if password has at least 8 characters
  if (password.length >= 8) {
    hasMinLength = true;
  }

  // Check each character of the password
  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    // Check for uppercase letters
    if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    }
    // Check for lowercase letters
    if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    }
    // Check for numbers
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
    // Check for special characters
    if ('!@#$%^&*(),.?":{}|<>'.includes(char)) {
      hasSpecialChar = true;
    }
  }

  // Create an error message if any criteria is not met
  let errors = [];

  if (!hasMinLength) {
    isValid = false;
    errors.push("At least 8 characters");
  }
  if (!hasUpperCase) {
    isValid = false;
    errors.push(" uppercase letters");
  }
  if (!hasLowerCase) {
    isValid = false;
    errors.push(" lowercase letters");
  }
  if (!hasNumber) {
    isValid = false;
    errors.push(" numbers");
  }
  if (!hasSpecialChar) {
    isValid = false;
    errors.push(" special characters.");
  }

  // Final message
  if (!isValid) {
    message = `Password is not strong. Missing: ${errors.join(", ")}`;
  }

  return message;
}

console.log(validatePassword("StrongPass1!")); // "Password is strong"
console.log(validatePassword("weakpass")); // "Password is not strong. Missing:  uppercase letters,  numbers,  special characters"
