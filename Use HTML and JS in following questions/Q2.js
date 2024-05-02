
let button = document.getElementById('myButton');
let resetButton = document.getElementById('resetButton');
let heading = document.getElementById('heading');


button.addEventListener('click', function() {

  button.innerText = 'Clicked!';
});


resetButton.addEventListener('click', function() {

  heading.innerText = 'Welcome!';
});
