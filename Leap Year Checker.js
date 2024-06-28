let year = prompt("Enter the year");
let result = LeapYearChecker(year);
if (result) console.log(`Is Leap Year`);
else console.log(`Is not a Leap Year`);

const LeapYearChecker = (year) => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? true : false;
};

