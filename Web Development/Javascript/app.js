let age = 29;
let userName = "Georgi";
let hobbies = ["Sorts", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(45);
console.log(totalAdultYears);

let person = {
  name: "Max",
  greet() {
    console.log("Hello");
  },
};

person.greet();
