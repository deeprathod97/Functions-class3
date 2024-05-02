function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let input1 = 7;
  let result1 = isPrime(input1);
  console.log("Input:", input1);
  console.log("Expected Output:", result1); 
  //Output: true
  
     
  let input2 = 10;
  let result2 = isPrime(input2);
  console.log("Input:", input2);
  console.log("Expected Output:", result2); 
  // Output: false
  