let temperature = prompt("Enter the temperature");
let raining = "";

do {
raining = prompt("It's raining today Y/N").toUpperCase();
} while (raining !== "Y" && raining !== "N");


const WeatherClothingAdviser = (temperature,raining) => 
{
if (temperature >= 25) {
  if (raining === "yes") {
    
      message="It's warm and raining. You should take an umbrella and wear light clothing."
    
  } else {
    message="It's warm. Wear light and breathable clothing.";
  }
} else if (temperature >= 15) {
  if (raining === "yes") {
    
       message="It's cool and raining. Consider taking an umbrella and wearing a light jacket."
    
  } else {
     message = "It's cool. A light jacket or sweater should be enough.";
  }
} else {
  if (raining === "yes") {
 
       message =
         "It's cold and raining. Wear a warm jacket and take an umbrella.";
  } else {
  
     message= "It's cold. Wear warm clothing like a jacket, sweater, and pants.";
  }
}
return message;
};
let message ="";
message= WeatherClothingAdviser(Number(temperature), raining);
console.log(message);