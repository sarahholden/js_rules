// ----------------------------------
// Part 1 - We do
// ----------------------------------

// 1. Declare a variable with the name "score". Assign it the value 3.
var score = 3;

// 2. Update the value of score. The new value should be 6.
score = 6;

// 3. Use jQuery to update the html of #item1 with the value of score (use the .html() method)
$('#item1').html(score);


// ----------------------------------
// Part 2 - You do
// ----------------------------------

// 1. Declare a variable with the name "totalAmount". Assign it the value 0.
var totalAmount = 0;
// 2. Update the value of totalAmount. The new value should be 10.
totalAmount = totalAmount / 3;
// 3. Add five to the totalAmount using the += operator
totalAmount += 1;

// 4. Use jQuery to update the html of #item2 with the value of totalAmount (use the .html() method)
$('#item2').html(totalAmount);


var firstName = "Sarah ";
var lastName = "Holden";
var fullName = firstName + " awesomedev " + lastName;
$('#item2').html(fullName);