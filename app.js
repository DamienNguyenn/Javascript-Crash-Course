let str = "Damien";
console.log(str[str.length - 1]);
let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

let bool = "1" !== 1;
console.log(bool);

let subscribed = false;
let loggedIn = true;

if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell the user to upgrade their subscription");
} else {
  console.log("tell user to log into account");
}

let cash = 40;
let price = 40;
let diff = Math.abs(cash - price);

if (cash > price) {
  console.log(`you paid extra - here's ${diff} dollars change`);
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day!");
} else {
  console.log(`not enough money - you still owe ${diff} dollars`);
}

let isStoreOpen = false;
if (cash >= price && isStoreOpen) {
  console.log("print the receipt");
}

let hot = true;
hot ? console.log("The weather is hot") : console.log("The weather is cold");

let str2 = subscribed && loggedIn ? "show the video" : "hide the video";
console.log(str2);

let receipt =
  cash >= price && isStoreOpen ? "give receipt" : "do not give receipt";
console.log(receipt);

let count = 1;
while (count <= 100) {
  console.log(count);
  count = count + 1;
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; ++i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`Frontend Simplified`);
  } else if (i % 3 === 0) {
    console.log(`Frontend`);
  } else if (i % 5 === 0) {
    console.log(`Simplified`);
  } else {
    console.log(i);
  }
}

let str3 = `Frontend Simplified`;
for (let i = 0; i < str3.length; i++) {
  console.log(str3[i]);
}

// console.log(`Welcome to FES, Damien`)
// console.log(`Welcome to FES, Harriet`)
// console.log(`Welcome to FES, Alice`)

// Function definition
function welcomePersonFES(firstName, lastName) {
  console.log(`Welcome to Frontend Simplified, ${firstName} ${lastName}`);
}

//Call the function
welcomePersonFES(`Damien`, `Nguyen`);
welcomePersonFES(`Alice`);
welcomePersonFES(`Harriet`);

function fn() {
  return `my return`;
  console.log(`my funciton`);
}

fn();

function sum(a, b) {
  return a + b;
}

console.log(sum(10, 10));

console.log(``);

// function temperatureConversion(Celsius) {
//   return Celsius * 1.8 + 32;
// }

// Arrow function
const temperatureConversion = (Celsius) => Celsius * 1.8 + 32;
console.log(temperatureConversion(0));
console.log(temperatureConversion(10));
console.log(temperatureConversion(30));

console.log(``);

let item1 = 20;
let item2 = 30;
let item3 = 40;
let item4 = 50;

let arr = [20, 30, 40, 50];
console.log(arr[0]);
console.log(arr[arr.length - 1]);
arr.push(200);

console.log(``);

let newArr = arr.filter((Element) => Element < 50);
console.log(newArr);

console.log(``);

let grades = [`A+`, `A`, `FAIL`];
// let passGrades = grades.filter((element) => {
//   if (element!==`FAIL`){
//     return true
//   }
// })
let passGrades = grades.filter((element) => element !== `FAIL`);
console.log(passGrades);

console.log(``);

let goodgrades = [];
for (let i = 0; i < grades.length; ++i) {
  console.log(grades[i]);
  if (grades[i] !== `FAIL`) {
    goodgrades.push(grades[i]);
  }
}
console.log(goodgrades);

console.log(``);

let arr2 = [1, 4, 9, 11];
let newArray2 = arr2.map((element) => undefined);
console.log(newArray2);

console.log(``);

let dollars = [1, 5, 10, 3];
let dollarsToCents = dollars.map((element) => element * 100);
console.log(dollarsToCents);

console.log(``);

let cents = [];
for (i = 0; i < dollars.length; ++i) {
  cents.push(dollars[i] * 100);
}
console.log(cents);

console.log(``);

// let userFirtName = "Damien";
// let userLastName = "Nguyen";
// let userDiscordId = "DN";
// let userSubscription = "VIP";

let user = {
  username: "Damien",
  email: "nguyentrihieu253@gmail.com",
  Subscription: "VIP",
  lessonsCompleted: [0, 1],
};

console.log(user.username[0]);
console.log(user.lessonsCompleted.map((elem) => elem * 2));

console.log(``);

let users = [
  {
    username: "Damien",
    email: "nguyentrihieu253@gmail.com",
    password: `DarkKiller`,
    Subscription: "VIP",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Alice",
    email: "alice253@gmail.com",
    password: "ScarletWitch",
    Subscription: "VIP",
    lessonsCompleted: [0, 1],
  },
];

console.log(users[0].username);

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    console.log("this ran");
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log(`Log the user in`);
      } else {
        console.log(`Password is incorrect`);
      }
      return;
    }
  }
  console.log(`Could not find the email that matches`);
}
login("nguyentrihi]eu253@gmail.com", `DarkKller`);

console.log(``);

function register(user) {
  users.push(user);
}
register({
  username: `Damien`,
  email: `nguyentrihiwu253@gmail.com`,
  password: `DarkKiller`,
  subsriptionStatus: `VIP`,
});
console.log(users);

// First way of accessing an element
console.log(document.querySelector(`#title`));

// Second way of accessing an element
console.log(document.getElementById("title"));

//Change HTML
document.querySelector(".title").innerHTML += " Frontend Simplified";

//Change CSS
document.querySelector(".title").style.fontSize = "16px";

function changeTitleToRed() {
  console.log(`clicked`)
  document.querySelector('.title').style.color = 'red'
}

function DarkMode(){
  document.querySelector('body').classList.toggle('dark-theme')
}
