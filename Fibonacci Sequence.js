let number = parseInt(prompt("Enter the number"));

const FibonacciSequence = (n) => {
  if (n === 0) return 0; // Base case: F(0) = 0
  if (n === 1) return 1; // Base case: F(1) = 1
  return FibonacciSequence(n - 1) + FibonacciSequence(n - 2); // Recursive case: F(n) = F(n-1) + F(n-2)
};

let result = FibonacciSequence(number);
console.log(`Fibonacci of ${number} is ${result}`);
