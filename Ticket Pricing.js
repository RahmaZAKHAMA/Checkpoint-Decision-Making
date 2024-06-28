let age = prompt("Enter the age");
let price=TicketPricing(age);
if(price!="Invalid Age")
console.log(`The ticket price is ${price}`);
else
console.log(`Invalid Age`);

const TicketPricing = (age) => {
  if (Math.floor(age) <= 12) return " $10";
  else if (Math.floor(age) >= 13 && Math.floor(age) <= 17) return " $15";
  else if (Math.floor(age) >= 18) return " $20";
  else return "Invalid Age";
};
