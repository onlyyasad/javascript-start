// problem 1 : Harry's mom gave him 1000tk and asked him to buy 1kg oranges and 2kg apples. The price of 1kg apple is 100.50 tk and 1kg orange is 150.30 tk.Now, Write a program to help Harry calculate how much money the shopkeeper will return.

var moneyHad = 1000;
var orangePrice = 150.30;
var applePrice = 100.50;
var orangeQuantity = 2;
var appleQuantity = 1;
var totalPrice = (orangePrice * 1) + (applePrice * 2);
var moneyRemaining = moneyHad - totalPrice;
console.log(moneyRemaining)

// problem 2: Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. The obtained numbers are respectively 75.25 , 65, 80, 35.45, 99.50 

var mathematicsMark = 75.25;
var biologyMark = 65;
var chemistryMark = 80;
var physicsMark = 35.45;
var banglaMark = 99.50;
var totalMark = mathematicsMark + biologyMark + chemistryMark + physicsMark + banglaMark;
var totalSubject = 5;
var averageMark = totalMark / totalSubject;
averageMark = averageMark.toFixed(2)
averageMark = parseFloat(averageMark)
console.log(averageMark)

// problem 3: John's teacher gave him two variables. First one "I am going to be" and second one "an awesome web developer". Each variable contains a string. John's teacher asked him to combine these two strings and print them in one line. Help John write the program. 

var part1 = "I am going to be"
var part2 = "an awesome web developer"
var sentence = part1 + part2;
console.log(sentence)

// problem 4: Sarah's mother is teaching her mathematics. She gave Sarah a number 119 and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program. 

var givenNumber = 199;
var divideBy = 5;
var reminder = 199 % 5;
console.log(reminder)