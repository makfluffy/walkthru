prompt("What is the value?");

// Unit of table 
var table = 5;            

var operator = 'Multiplication'; // Type of calculation 

 // Set counter to 1 
 var i = 1;                

 // Message 
 var msg = '<h2>Multiplication Table</h2>';
  // Do multiplication 

  while (i < 11) { 

    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />'; 

    i++; 

  } 

} 

  

// Write the message into the page 

var el = document.getElementById('blackboard'); 

el.innerHTML = msg; 
