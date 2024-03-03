// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// document.getElementById("demo").innerHTML = size;
// console.log(fruits.length);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
// fruits.push('almna')



// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.shift();
// fruits.unshift("Lemon");
// fruits[4] = "Kiwi";
// console.log(fruits);


// const myGirls = ["Cecilie", "Lone",];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// const fruits2 = ["Banana", "Orange", "Apple", "Mango","annas","nar","uzum "];
// fruits2.copyWithin(1,0,3);
// console.log(fruits2);
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYssZ";

// console.log(text.length);

// var text2 = "HELLO WORLD";
// console.log(text2.charAt(0));


// function myfunctin() {
//     let text=document.getElementById("same").innerHTML;
//     document.getElementById("same").innerHTML=text.toUpperCase()
    
// }

// function myfunctin() {
//     let text=document.getElementById("same").innerHTML;
//     document.getElementById("same").innerHTML=text.toLowerCase()
    
// }

// let text1 = "Hello";
// let text2 = "World!";
// let text3 = text1.concat(" ",text2);
// document.getElementById("same").innerHTML = text3;

// const text1 = "     Hello World!     ";
// const text2 = text1.trim();
// console.log(text2.length);

// function myFunction() {
//     let text = document.getElementById("same").innerHTML;
//     document.getElementById("same").innerHTML =
//     text.replace("Microsoft","W3Schools");
//   }
//   myFunction()

let text = "Outside: " + typeof carName;
document.getElementById("demo1").innerHTML = text;

function myFunction() {
  let carName = "Volvo";
  let text = "Inside: " + typeof carName + " " + carName; 
  document.getElementById("demo2").innerHTML = text;
}

myFunction();