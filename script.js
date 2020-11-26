let score = parseFloat(prompt("Enter your score.", "0"));
let grade;

if (score < 0 || score > 100 || isNaN(score)) {
  alert("Please enter a valid value.");
} else if (score <= 49) {
  grade = "F";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 90 && score <= 100) {
  grade = "A";
}

let examMonth = prompt("Enter the month that you took the exam.").toLowerCase();
let season;

if (
  examMonth === "september" ||
  examMonth === "october" ||
  examMonth === "november"
) {
  season = "Autumn";
} else if (
  examMonth === "december" ||
  examMonth === "january" ||
  examMonth === "february"
) {
  season = "Winter";
} else if (
  examMonth === "march" ||
  examMonth === "april" ||
  examMonth === "may"
) {
  season = "Spring";
} else if (
  examMonth === "june" ||
  examMonth === "july" ||
  examMonth === "august"
) {
  season = "Summer";
} else {
  alert("Please enter a valid month.");
}
let subject = prompt("Enter the name of the subject.");
console.log(`Your ${season} grade for ${subject} is ${grade}.`);
