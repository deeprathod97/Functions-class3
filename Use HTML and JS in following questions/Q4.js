function calculateSquare() {
   
    let number = document.getElementById("numberInput").value;
  
    if (isNaN(number)) {
      alert("Please enter a valid number.");
    } else {
    
      let square = number * number;
  
      alert("The square of " + number + " is " + square);
    }
  }
  