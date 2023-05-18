let number = prompt("What is the value?"); //Prompt the user with a number selection
var table = number; //Store it in a variable
 

var operator = 'Multiplication'; // Type of calculation 

var i = 1;                 // Set counter to 1 

var msg = '<h2>Multiplication Table</h2>';              // Message 

  



  // Do multiplication 

  while (i < 11) { 

    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />'; 

    i++; 

  } 



  

// Write the message into the page 

var el = document.getElementById('blackboard'); 

el.innerHTML = msg; 

