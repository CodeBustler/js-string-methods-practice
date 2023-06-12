let log = console.log;
// String Methods

// 01. length Property
let string = 'CodeBustler';
// log(string.length); // 11

// 02. includes(searchValue, startIndex) | Returns Boolean
// log(string.includes('B', 4)); // true

// 03. toUpperCase()
// log(string.toUpperCase()); // CODEBUSTLER

// 04. toLowerCase()
// log(string.toLowerCase()); // codebustler

// 05. startsWith(searchValue, start) | Returns Boolean
// log(string.startsWith('Bus', 4)); // True

// 06. endsWith(searchValue, start) | Returns Boolean
// log(string.endsWith('er', 11)); // true

// 07. search(searchValue) | Returns first match index (-1 if no match)
// ** If the search value is a string, it is converted to a regular expression.
log(string.search('de')); // 2

// 08. match(match) | match based on regExp*
// Returns array of info, if no match returns null*
// log(string.match(/Code/g)); // ["code", "Code"]

// 09. indexOf(searchvalue, start) | Retuns index (first occurence)
// log(string.indexOf('ode')); //1

// 10. lastIndexOf() | Retuns index (*last occurence)
// log(string.lastIndexOf('ode')); //13

// 11. trim() | Removes whitespace from both ends of a string.
let strSpace = ' code bustler ';
let trimString = strSpace.trim();
// log(strSpace.length); // 14 (With Space)
// log(trimString.length); // 12 (Without Space)

// 12. trimStart() | Removes whitespace from start of a string.
let trimStart = strSpace.trimStart();
// log(strSpace.length); // 14 (With Start Space)
// log(trimStart.length); // 13 (Without Start Space)

// 13. trimEnd() | Removes whitespace from start of a string.
let trimEnd = strSpace.trimEnd();
// log(strSpace.length); // 14 (With End Space)
// log(trimStart.length); // 13 (Without End Space)

// 14. at(index) | Returns indexed single character | ES12(2021)
// log(string.at(4) + ' | By using at()'); // B
// log(string[2]); // d | this also possible for string char

// 15. charAt(index) | Returns
// log(string.charAt(4) + ' | By using chatAt()'); // B

// DIFFERENCE at() & charAt
// The at(index) method properly handles non-BMP Unicode characters and returns them as a single character, (BMP : Basic Multilingual Plane)

// The charAt(index) method treats non-BMP Unicode characters as a surrogate pair and returns the first half of the surrogate pair (which is not a valid character on its own).

// 16. charCodeAt(index) | Returns Unicode of the character at a specified index (position)
// log(string.charCodeAt('4')); // 66 (unicode of B)

//-----------------

// 17. String.fromCharCode(n1, n2, ..., nX) | Return string created by using specified sequance of unicode values
// log(String.fromCharCode(66, 66, 67)); // BBC

// 18. concat(string1, string2, ..., stringX) | joins two or more strings.
let stng1 = 'CodeBustler';
let stng2 = ' All About Coding';
let newString = stng1.concat(stng2);
// log(newString);

// 19. replace(searchValue, newValue)
let cities = 'Hyderabad, Bangalore, Mysore';
let updatedCities = cities.replace('Hyderabad', 'Delhi');
// log(updatedCities); // Delhi, Bangalore, Mysore

// You can use regular expression replace all matching string in replace()
// >>>  input = input.replace(/test/g, 'java');
// Regular expressions are unsafe to use because they contain escape characters that need for certain functions, and these are not readable.

//-----------------

// 20. replaceAll() | String.prototype.replaceAll(searchString, replaceString)
// *searchString input string that needs replace | it can be a string or a regular expression

let myString = 'I love cars, and cars are costly';

let searchString = 'cars';
let replaceString = 'bikes';

let myNewString = myString.replaceAll(searchString, replaceString);

// console.log(myNewString); // I love bikes, and bikes are costly

// REGULAR EXPRESSION
// String inputString="es2021 first sample code first";
// console.log(inputString.replaceAll(/first/g, ''));
// console.log(inputString.replace(/first/g, ''));

//-----------------

// 21.  split(separator, limit) | splits a string into an array of substrings
let my_string = 'Hi, Good evening this is codebustler!';
let myArray = my_string.split('');
// log(myArray);
// document.getElementsByTagName('h2')[0].innerHTML = myArray;

// 22. repeat(count) | Returns a new string with a number of copies of a string
let strNew = string.repeat(5);
// log(strNew);

// 23. slice(start, end) | Extracts a part of a string in a new string
let strr = 'CodeBustler Coder';

let sliceString = strr.slice(0, 4); // Code
let sliceString1 = strr.slice(0); // CodeBustler Code (Whole String)
let sliceString2 = strr.slice(-1); // r (last String)

// log(sliceString);
// log(sliceString1);
// log(sliceString2);

// 24. substring(start, *end) | Extracts characters from start to end (positions)
// log(strr.substring(0, 11)); //CodeBustler
// log(strr.substring(12, 17)); //Coder

// 25. substr(start, *length) | Extracts a part of a string
// log(strr.substr(4, 3)); // Bustler

//------------------

//In JavaScript, the padStart() and padEnd() methods are used to pad a string with a specified character or characters to reach a desired length.

// 26. padStart(length, string) | Pads a string from the start.
let numb = 5;
let text3 = numb.toString();
let padded = text3.padStart(3, '*');
// log(padded); // **5

// 27. padEnd(length, string) | Pads a string at the end.
let padded2 = text3.padEnd(3, '*');
// log(padded2); // 5**

//------------------

// 28. toString() | Returns a string as a string | can be used to convert a string object into a string. ** Every JavaScript object has a toStr ing() method. Normally, you **will not use it in your own code.
let text = 'Hello World!';
let result = text.toString();
// log(result); // Hello World!

// 29. valueOf()
// This method is the default method for JavaScript strings.
// It is used internally by JavaScript.
// Normally, you will not use it in your code.
// let result1 = text.valueOf(); // Hello World!
