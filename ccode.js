//class
class Circus{
  constructor(location, rules, performer) {
    this.location = location;
    this.rules = rules;
    this.performer = performer;
  }
  //adding a method
  stunt() {
    const thisStunt = `${this.performer} is going to juggle torches whiole standing on an elephant.`;

  }
}
const circus = new Circus("Water Themed Park");



class Country {
  constructor(location, population) {
    this.location = location;
    this.population = population;
  }
}
  class Canada extends Country {
   language() {
    const thisLanguage = "French Canadian";
   }
  }
  let myCountry = new Canada("Maple Leaf", 41000000);
  let globeTrot = myCountry.location;
 let peoplePop =  myCountry.population;
  myCountry.language();

  class Vehicle {
    constructor(brand, year){
      this.brand = brand;
      this.year = year;

    }
  }
  class Car extends Vehicle {
    constructor(brand, year, numOfDoors) {
      super(brand, year);
      this.numOfDoors = numOfDoors;
    }
  }
let myCar = new Car("Math.random Motors", 2020, 4);


class Bitcoin {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }

  static createBusiness() {
    return new this("Business", 1000000);
  }
}
let myInvestment = Bitcoin.createBusiness();


class Data {
  static numberOfFilesSold = 0;

  constructor(type) {
    this.type = type;
    Data.numberOfFilesSold++;
    //To access the value of a static property, you just need to use dot notation 
    // on the class itself, since the property belongs to the class.
  }
}
let thisData = new Data("Corrupted file")

//variables and data types: string, number, float,boolean, undefined, null, bigint, symbol, dynamic array,, static array, object
//type conversion typeof() and Number(), String(), Boolean(), BigInt()
//High order functions: map(), filter(), reduce(), forEach(), sort(), every(), some()
//new Map() and can function similar to new Set()
//new Map() allows you to store key-value pairs where keys can be of any data type: get(key), set(key, value), has(key), delete(key), clear(), size property, keys(), values(), entries(), forEach()
const myTreesMap = new Map();
myTreesMap.set({ type: 'deciduous' }, 'Maple tree');
//WeakMap() has set(), get(), has(), delete() methods, and only allows objects as keys. 
//reassigning variables
//reducer function 
//indexOf() method
//concatination + shallow copies
//const originalArray = [1, 2, 3];
//const copyArray = [].concat(originalArray); [...originalArray];
//case methods
//whitespace trimming
//repalce() and replaceAll()
//repeat() method
//Math operators + - * % / += -= *= /= %= **= &= |=
//inequality: !=, !==
// Operation precedence example: 2 + (3 + 4)
//prefix and postfix increment and decrement
//exponent operator: 2 ** 8 ** 3 - two multplied by two, eight times. then that number multiplied by itself 3 times
//Math methods: random(), floor(), round(), min/max, .ceil(),.trunc(), .sqrt(), .cbrt(), .abs(), .pow(), isNaN()
//Unary Operators: +str -str !variable: logical NOT operator
// ~ bitwise NOT operator, | ^ << >>
//Binary logical operators: ?, ??, &&, ||
//find the sum
//fromCharCode() and charCodeAt()
//parseFloat() and parseInt() are valuable tools for converting strings to numbers in JavaScript.
//toFixed() method is a built-in JavaScript function that formats a number using fixed-point notation.
//for in loop for objects, for of loop for arrays and strings, while loop must be true at least once, do while loop will run at least once, break and continue statements, nested loops
//if and switch statements
//arrays push() pop() shift() unshift() slice() splice() indexOf() lastIndexOf() join() reverse() sort() split()
//One and Two dimensional array difference
//Array destructuring and rest operator
//delete
//regex: /pattern/flags, .test(), .exec(), .match(), matchAll(), .replace(), .search(), .split()
//regex flags: g, i, m, s, u, y. i ignores case, g global, m multiline, s dotall, u unicode, y sticky, d information about indices of matches
//regex carrot anchor ^, dollar sign anchor $

const regex = /freecodecamp/g;
const str = "freecodecamp is the best we love freecodecamp";
const matched = str.matchAll(regex);
//console.log(Array.from(matched));
//const regex = /\w/; // \w matches any alphanumeric character (letters and digits) and underscore
//getDate(), getDay(), getFullYear(), getHours(), getMilliseconds(), getMinutes(), getMonth(), getSeconds(), getTime(), getTimezoneOffset(), getUTCDate(), getUTCDay(), getUTCFullYear(), getUTCHours(), getUTCMilliseconds(), getUTCMinutes(), getUTCMonth(), getUTCSeconds()
//set()
const treeSet = new Set();
treeSet.add("Baobab");
treeSet.add("Jackalberry");
treeSet.add("Mopane Tree");
treeSet.add("Breadfruit");
treeSet.delete("Breadfruit");
treeSet.keys()
treeSet.values()
//treeSet.forEach((tree) => console.log(tree));
treeSet.size
const treeWeakSet = new WeakSet();

//863

let weekend = "on this day I'll hike"
let percentage = 5.5
let projectDeadline = false;
let bird;
let ocean = null;
const infiniteBaths = "method of my madness, \nInfinite baths, I fought so long to be here, \nWatching \
over me, drift over me"



//string/multiple string concatination
let skyBuild = "Hi";
skyBuild += ', Rick.'
let waterFall = "Methodology";
let typeMetal =  "Applied to"
let typeResult = waterFall.concat(' ', typeMetal)

const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase();

const umbrella = 44;
const silverCoins = 9999999999999999999n;
 //Data type conversion
const result = (silverCoins ) - BigInt(umbrella);

/*

*/



//indexOf learning
let $number = "This is not a number, but a string";
let $newStr = $number.indexOf("i");
let $strInfoNumber = $number[$number.length - 1]
const $totalChars = $number.length;
//console.log($strInfoNumber + " " + $totalChars) g 34

 const subject = "JavaScript";
const totalChars = subject.length;
//console.log(totalChars);
//end



//ASCII - American Standard Code Information Interchange:  It assigns a numeric value to each character, which is universally recognized by machines.
//128 characters in total. Key methods fromCharCode() and charCodeAt()

function blaster() {
 const bot = "g";
 let $bot = String.fromCharCode(111)
 const dataOnBot1 = bot.charCodeAt(0)
 //console.log(dataOnBot1 + " " + dataOnBot2)
}
blaster()
//end



//Slice( ) method that returns a new string, two arguments second is optional. it's an extractor for strings
//can also count backwards using -

const determine = "It has been determined";
let inCase = determine.slice(1, -2);
//console.log(inCase)
//end


//Case tools
let bigBot = "HELLO I AM A ROBOT.";
let smallBot = bigBot.toLowerCase();
// .toUpperCase does the opposite
//console.log(smallBot)
//end


//Whitespace
const vegetable = "  Broccoli is good.  ";
let vSoup = vegetable.trim()
let tSoup = vegetable.trimEnd()
let cSoup = vegetable.trimStart();
//end




/*
replace()/replaceAll() replaces and returns a new string with from a substring and leaves
 the original unchanged because JavaScript strings are immutable.
 and takes two arguments a search value, then a new value
*/
let sleepTime = "I go to bed at midnight.";
const newSleepTime = sleepTime.replace("m", "2AM");
//console.log(newSleepTime)


/* repeat() is a counter for strings 
 example: const string = strings.repeat(4)
 and cannot be a negative number 
 You are not limited to passing a number directly into the repeat() method. 
 You can also pass a variable that stores a number value.
*/



//Math operators + - * % / += -= *= /= %= **= &= |=
//inequality: !=, !==
// Operation precedence example: 2 + (3 + 4)
//prefix and postfix increment and decrement
//exponent operator: 2 ** 8 ** 3 - two multplied by two, eight times. then that number multiplied by itself 3 times
const bscmth = 5 + '10';
const nonmth = '11' + 22;
const pbmath = Number("12") - 8;
const cdmath = +'13' * 6;



//Unary Operators: +str -str !variable: logical NOT operator
// ~ bitwise NOT operator, | ^ << >>

/* 
Binary logical operators: ?, ??, &&, ||
*/
let userSettings = {
   darkmode: 'dark',
   volume: null,
   notifications: false,
   staff: 33
}
let hiddenSetting = userSettings.staff >= 21 ? "Full team" : "Lacking";
let volume = userSettings.volume ?? 'high'; //dot notation



//Mathbot
//.trunc(), .sqrt(), .cbrt(), .abs(), .pow(), isNaN()
function mathBot() {
   const botName = "MathBot";
const randomNum = Math.random();
const min = 1;
const max = 100;
const randomNum2 = Math.random() * (max - min) + min;
const numRoundedDown = Math.floor(6.7);
const randomInt = Math.floor(Math.random() * (max - min) + min);
const numRoundedUp = Math.ceil(3.2);
const numRounded = Math.round(2.7);
const numRounded2 = Math.round(11.2);
const maxNum = Math.max(3, 125, 55, 24);
const minNum = Math.min(6, 90, 14, 90, 2);
const thisRandomNum = Math.random() * (5 -1) +1 ;
}




//parseFloat() and parseInt() are valuable tools for converting strings to numbers in JavaScript. 
//.toFixed() method is a built-in JavaScript function that formats a number using fixed-point notation. 
// It's particularly useful when you need to control the number of decimal places in a number, 
// especially for financial calculations.

let phpR = 9.7888434; phpR.toFixed(3)
let price = 19.99
let tax = 0.12
let taxTotal = price + (price * tax)
const fixedVersion = taxTotal.toFixed(2) //22.39
//end



//switch 
let element = "fire"; //strings with strings, numbers with numbers
switch (element) {
   case "flood":
      let water = ""
      break;
      case "storm":
         water = "thunder";
         break;
         default:
      const safelite = "emerge"
}
//end



//function practice - arrow function
const darkSigns = (purple) => {
   const view = "Where me met " + purple + " I saw dark signs";
   //console.log(view)
   return darkSigns;
}
darkSigns("neon")


const vore = () => {
   const offering = "twilight"
   return vore;
}
vore()


const crisisCore = (aqua, reins) => {
return aqua * reins
}
crisisCore(9, 122);
const crisisMach = (staple, top) => staple + top;
crisisMach("Go zone", "No go zone");



// Email Masking

const email = "apple.pie@gmail.com";
function maskEmail(email) {
 
  const atIndex = email.indexOf('@');
   if(atIndex === -1) return email;
   const localPart = email.slice(0, atIndex);

  let maskedLocal;
  if (localPart.length <= 3) {
   maskedLocal = localPart
  } else {
   maskedLocal = localPart.slice(0, 3) + '*'.repeat(localPart.length -3);
  }

  
  return maskedLocal + email.slice(atIndex);
}
//console.log(maskEmail(email));
//end



const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You quality for a car loan."
  }
}



// BlackJack game
let count = 0;
function cardCounter(card) {
    // Convert input to string for consistent handling
    const cardStr = String(card).toUpperCase().trim();
    if ([2, 3, 4, 5, 6].includes(Number(cardStr))) {
        count += 1;
    }
    
    else if ([7, 8, 9].includes(Number(cardStr))) {
    }
    else if (["10", "J", "Q", "K", "A"].includes(cardStr)) {
        count -= 1;
    }

    
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}
//end




// Leap year calculator
function isLeapYear(num) {
    if (num % 4 === 0 && num % 100 !== 0) {
        return `${num} is a leap year.`;
    } else if (num % 400 === 0) {
        return `${num} is a leap year.`;
    } else {
        return `${num} is not a leap year.`;
    }
}

let year = 1394;   
let result1= isLeapYear(year);
//console.log(result1);
//end



//String Truncate Algorithm
function truncateString(str1, num1  ) {
  if (str1.length > num1) {
    return str1.slice(0, num1) + "...";
  }
  return str1;
}
//end



//Confirm ending tool
function confirmEnding(str1, str2) {
  if (str2.length > str1.length) {
    return false;
  }
  return str1.slice(-str2.length) === str2;
}
//end



//Arrays
let chickenDinner = ["BBQ", "Buffalo", "Ranch", "Frank's red hot", "Cinnamon"];
chickenDinner.push("butter garlic") //adds to end
chickenDinner.unshift("waffles and syrup"); //adds to beginning and returns a new array
chickenDinner.shift() //removes first element and returns it
chickenDinner.pop() //removes last element
 
//One and Two dimensional array difference
const oneDimensionalArray = [1, 2, 3, 4, 5];
const twoDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
//to access an element in a two-dimensional array, 
// you need to specify both the row and column indices. 
// For example, to access the element 5 in the two-dimensional array, 
// you would use two indices targeting the row and column. twoDimensionalArray[1][1]


//Array destructuring
//Essentially you take values from a variable and add it to new variables, use commas for skipping values 
let newBot = ["Shaun", "Nick", "Oliver", "Peter", "Gary"];
let [bot100, bot200, , bot9000] = newBot;
let shipCont = ["Cargo", "Container"];
let [cement, wood, glass, castIron = "lost rig"] = shipCont;
// if your destructured array has more variables than the targeted variable has values you
//have to assign a default value to the variable, otherwise it will be undefined
let sinkProject = ["Draino", "Plunger", "Wrench"];
let [toolKit, ...rest] = sinkProject;
//rest operator takes the remaining values and puts them into a new array, 
// placement must be last in the list of variables



//How to reverse a string; 1 .split() Splitting the string into an array of characters
//2: .reverse()reverse the array. 3: .join() Join the characters back into the string
let decision = "We must - file for bankruptcy";
let revDecision = decision.split(" "); //"" turns everyhting into a single character
 //" " quotes every element, "-" splits at each dash if any.
let summoning = "Final Fantasy VII Remake, Rebirth, Revelation";
let revSummon = summoning.split("").reverse().join("");



//lunch picker
// 1. Initialize the lunches array
let lunches = [];

function addLunchToEnd(array, lunchItem) {
    array.push(lunchItem);
    //console.log(`${lunchItem} added to the end of the lunch menu.`);
    return array;
}
addLunchToEnd(lunches, "Pizza");

function addLunchToStart(array, lunchItem) {
    array.unshift(lunchItem);
    //console.log(`${lunchItem} added to the start of the lunch menu.`);
    return array;
}
addLunchToStart(lunches, "Salad");

function removeLastLunch(array) {
    if (array.length === 0) {
        //console.log("No lunches to remove.");
        return array;
    }
    const removed = array.pop();
    //console.log(`${removed} removed from the end of the lunch menu.`);
    return array;
}
removeLastLunch(lunches);


function removeFirstLunch(array) {
    if (array.length === 0) {
        //console.log("No lunches to remove.");
        return array;
    }
    const removed = array.shift();
    //console.log(`${removed} removed from the start of the lunch menu.`);
    return array;
}
removeFirstLunch(lunches);

function getRandomLunch(array) {
    if (array.length === 0) {
        //console.log("No lunches available.");
        return;
    }
    //searching for random index
    const randomIndex = Math.floor(Math.random() * array.length);
    const selected = array[randomIndex];
    //console.log(`Randomly selected lunch: ${selected}`);
}
getRandomLunch(lunches);


function showLunchMenu(array) {
    if (array.length === 0) {
       
        return;
    }
  
}
showLunchMenu(lunches);
//end







//removing properties from objects allows you to manipulate objects dynamically, 
// and clean up unnecessary data.
let obj = {a: 1, b: 2, c: 3};
delete obj.b;
//console.log(obj);

const person = {
  name: "Alice",
  age: 30
};


if (Object.hasOwn(person, "score")) {
  //console.log("Has score:", user.score); // Has score: 0
}


const person22 = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};



const person11 = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

//console.log(person.contact.phone.work); // "098-765-4321"


const person232 = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
};
//console.log(person.addresses[1].city)



//wildlife object practice
const tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true
};

const elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true
};

const getSpecies = (animal) => {
  return animal.species;
};

//console.log(getSpecies(tiger));

const getAge = (animal) => {
  return animal.age;
};

//console.log(getAge(tiger));

const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

//console.log(addHabitat(tiger, "Rainforest"));

const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

//console.log(updateAge(elephant, 12));

const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

//console.log(removeEndangeredStatus(tiger));

const hasHabitat = (animal) => {
  return animal.hasOwnProperty("habitat");
};

//console.log(hasHabitat(tiger));
//console.log(hasHabitat(elephant));

const getProperty = (animal, propertyName) => {
 return animal[propertyName];
}
//console.log(getProperty(tiger, "species"))
//console.log(getProperty(elephant, "age"))
//end



function normalizeUnits(manifest) {
  if (!manifest || typeof manifest !== 'object') {
    return {};
  }
  
  const normalized = { ...manifest };
  
  if (typeof normalized.weight === 'number' && normalized.unit === 'lb') {
    normalized.weight = Number((normalized.weight * 0.45).toFixed(2));
    normalized.unit = 'kg';
  } else if (typeof normalized.weight === 'number' && normalized.unit === 'kg') {
    normalized.unit = 'kg';
  }
  
  return normalized;
}

function validateManifest(manifest) {
  if (!manifest || typeof manifest !== 'object') {
    return {
      containerId: "Missing",
      destination: "Missing",
      weight: "Missing",
      unit: "Missing",
      hazmat: "Missing"
    };
  }
}
//end



//Quiz Game
const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Math",
    question: "What is 8 × 7?",
    choices: ["54", "56", "64"],
    answer: "56"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    answer: "George Washington"
  },
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    choices: ["Seoul", "Tokyo", "Beijing"],
    answer: "Tokyo"
  },
  {
    category: "Sports",
    question: "How many players are on a soccer team on the field?",
    choices: ["9", "10", "11"],
    answer: "11"
  }
];

const getRandomQuestion = (questions) => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

const getRandomComputerChoice = (choices) => {
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

const getResults = (question, computerChoice) => {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
};

//for loop, for in for objects, for of for arrays and strings, while loop must be true at least once,
//do while loop will run at least once, break and continue statements, nested loops


//Word Counter
function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }
  
  const words = sentence.trim().split(" ");
  let count = 0;

  for (const word of words) {
    if (word !== "") {
      count++;
    }
  }

  return count;
}

const wordCount = getWordCount("I love freeCodeCamp");

function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
//end


//largest number finder
function largestOfAll(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
    result.push(max);
  }
  return result;
}
//end


//rest parameter
function uniteUnique(...arrs) {
  const result = [];
  const seen = new Set();

  for (const arr of arrs) {
    for (const item of arr) {
      if (!seen.has(item)) {
        seen.add(item);
        result.push(item);
      }
    }
  }

  return result;
}
//end


//PW generator
function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

const password = generatePassword(16);

//console.log("Generated password: " + password);
//end



//Sum All numbers algorithm
function sumAll(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  // Formula for sum of integers from min to max inclusive
  return (max - min + 1) * (min + max) / 2;
}
//end



//Fibonacci sum calculator
function sumFibs(num) {
  let a = 1;
  let b = 1;
  let total = 0;
  while (a <= num) {
    if (a % 2 === 1) {
      total += a;
    }
    let next = a + b;
    a = b;
    b = next;
  }
  return total;
}
//end


//Element Skipper
function dropElements(arr, func) {
  let index = 0;
  while (index < arr.length && !func(arr[index])) {
    index++;
  }
  return arr.slice(index);
}
//end


//Higher order functions
function operateOnArray(arr, operation) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
}
  return result;
}

function double(x) {
    return x * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = operateOnArray(numbers, double);
//console.log(doubledNumbers); // [2, 4, 6, 8, 10]
//end


//map() method creates a new array by assigning a function to each element
//The filter method is used to create a new array with elements that pass a specified test

const numbersF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbersF.filter((num) => num % 2 === 0); //filters numbers divisible by 2
const squaredNumbers = numbersF.map((num) => num * num); //squares each number in the array
const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 }
];

const youngPeople = developers.filter((person) => person.age < 30);
//end



//The reduce method The reducer function takes the accumulator (which starts at 0, 
// as specified by the second argument to reduce) and adds each number to it.
const transactions = [
  { amount: 100, type: "credit" },
  { amount: 20, type: "cash" },
  { amount: 150, type: "credit" },
  { amount: 50, type: "cash" },
  { amount: 75, type: "credit" }
];

const totalCreditWithBonus = transactions
  .filter((transaction) => transaction.type === "credit")
  .map((transaction) => transaction.amount * 1.1)
  .reduce((sum, amount) => sum + amount, 0);
//end



//sort() arranges strings in alphabetical order and numbers in ascending order by default
// or use arrayVariable.sort((a, b) => a - b) to get lowest to highest
// It can also be used to sort objects by a specific property.


//practice every() it checks if every single item in your array satisfies a condition you specify.
const nnnumbers = [2, 4, 6, 8, 10];
const hasAllEvenNumberss = numbers.every((num) => num % 2 === 0);
//some() checks if at least one item in your array satisfies a condition you specify.
const hasSomeEvenNumbers = numbers.some((num) => num % 2 === 0);
//best used for larger arrays and stoped as soon as it returns false for every and true for some


 
//book organizer
const books = [
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "Pride and Prejudice",
    authorName: "Jane Austen",
    releaseYear: 1813
  }
];

// Callback function for sorting by year (ascending)
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

// Filter out books written after 1950 (keep books <= 1950)
const filteredBooks = books.filter(book => book.releaseYear <= 1950);

// Sort the filteredBooks array in ascending order by releaseYear
filteredBooks.sort(sortByYear);
//console.log("Original books:", books);
//console.log("Filtered books (year <= 1950):", filteredBooks);
//end


//sorted index finder
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  const index = arr.findIndex(x => x >= num);
  return index === -1 ? arr.length : index;
}
//end


//symmetric difference
function diffArray(arr1, arr2) {
  const diff1 = arr1.filter(item => !arr2.includes(item));
  const diff2 = arr2.filter(item => !arr1.includes(item));
  return [...diff1, ...diff2];
}
//end



//deep flattening tool
function steamrollArray(arr) {
  let flattened = [];
  debugger;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(steamrollArray(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }
  return flattened;
}


//innerHTML and innerText are properties of DOM elements in JavaScript that allow you to access 
// and manipulate the content of HTML elements.
/*
const container = document.getElementById("container");
container.innerHTML = "<ul><li>Cheese</li><li>Tomato</li></ul>";
//further DOM manipulating
const containers = document.getElementById("container");
const img = document.createElement("img");
img.src = "https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg";
img.alt = "A slice of lasagna on a plate.";
containers.appendChild(img);
*/

//setInterval() setTimeout() clearTimeout() clearInterval()
const intervalID = setInterval(() => {
 //console.log("This will stop after 5 seconds");
}, 1000);

setTimeout(() => {
 clearInterval(intervalID);
}, 5000);

let timeoutID = setTimeout(() => {
  //console.log("This will run if not canceled");
}, 5000);




//throw method
function validateNumber(input) {
  if (typeof input !== "number") {
    throw new TypeError("Expected a number, but received " + typeof input);
  }
  return input * 2;
}
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that runs regardless of whether an error occurred or not
}


//Bank Account Management Program
class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    return "Deposit amount must be greater than zero.";
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    return "Insufficient balance or invalid amount.";
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter(t => t.type === "deposit")
      .map(t => t.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(t => t.type === "withdraw")
      .map(t => t.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// Create instance and perform transactions
const myAccount = new BankAccount();
/*
console.log(myAccount.deposit(200));   
console.log(myAccount.deposit(100));   
console.log(myAccount.withdraw(50));   
console.log(myAccount.withdraw(30));      

console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
*/



//Algorithm Big O Notation
//O(1) is known as "Constant Time Complexity". When an algorithm has constant 
// time complexity, it takes the same amount of time to run, regardless of input size.
function checkEvenOrOddd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
//O(log n) is known as "Logarithmic Time Complexity". This means that the time 
//required by the algorithm increases slowly as the input size grows.

//O(n) is known as "Linear Time Complexity". The running time of algorithms with this 
//time complexity increases proportionally to the input size.

//O(n log n) is known as "Log-Linear Time Complexity". This is a common time complexity 
// of efficient sorting algorithms, like Merge Sort and Quick Sort.

//O(n²) is known as "Quadratic Time Complexity". The running time of these algorithms 
// increases quadratically relative to the input size, 
// which is generally not efficient for real-world problems.

 //"Exponential Time Complexity", denoted as O(2^n), and 
 // "Factorial Time Complexity",  O(n!). Both are inefficient for real-world scenarios.
