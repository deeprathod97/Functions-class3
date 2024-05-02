function calculateFactorial(number) {
    if (number < 0) {
      return "Factorial is not defined for negative numbers.";
    } else if (number === 0 || number === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= number; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  
  let input = 5;
  let result = calculateFactorial(input);
  console.log("Input:", input);
  console.log("Expected Output:", result); 
  //Output: 120
  