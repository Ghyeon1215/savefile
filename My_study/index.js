/* String 
const what = "Nicolas"

Boolean
const wat = true;

Number
const wat = 666;

Float
const wat = 55.1;

const nicoInfo = {
    name:"Nico",
    age:33,
    gender:"Male",
    isHandsome:true,
    favMovies: ["Along the gods","LOTR", "Oldboy"],
    favFood: [
        { 
          name: "Kimchi", 
          fatty:false 
        }, 
        { 
          name: "cheese burger",
          fatty: true 
        }
    ]
}

console.log(nicoInfo)
function sayHello(name, age){
    return`Hello ${name} you are ${age} years old`;
}


const greetNicolas = sayHello("Nicolas", 14)

console.log(greetNicolas)

const calculator = {
 plus: function(a, b){
     return a + b;
 }
}

console.log(greetNicolas)
const plus = calculator.plus(5, 5)
console.log(plus)*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("mouseenter", handleClick);
}
init();
