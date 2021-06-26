// console.log("Hello")

function ageInDays(){  // Functions of "Click Me" Button
var BirthYear = prompt("Which Year were you Born...... Good Friend?");   // Taking an Input from the user

var count = 0;  // Calculating Leap year
for(let i = 2021;i >= BirthYear;i--){
    if((0 == i % 4) && (0 != i % 100) || (0 == i % 400))
    count++;
}
console.log(count);

var ageInDayss = (2021 - BirthYear) * 365 + count;  // calculating Age in Days
var h1 = document.createElement("h1");   // creating an Element "h1"
var textAnswer = document.createTextNode("Your Are " + ageInDayss + " Days Old.");

h1.setAttribute("id","ageInDays");  // Setting Attribute to "h1" by id "ageInDays"
h1.appendChild(textAnswer);  // Appending textAnswer to "h1" tag
document.getElementById("flex-box-result").appendChild(h1);  // Displaying the "h1" tag in the flex-box-result area
}

function reset(){  // Functions of "Reset" Button
    document.getElementById("ageInDays").remove();
}