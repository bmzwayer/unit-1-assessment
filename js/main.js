// // state
// var runningNum;


// // cached elements
// var displayEl = document.querySelector('h1 span');
const incrementor = 1;

// var numberEl = document.getElementById('number');

// // event listeners
// document.getElementById('minus').addEventListener('click', function() {
//   displayEl = num--;
//   render();
// });
// document.getElementById('plus').addEventListener('click', function() {
//     displayEl = num++;
//     render();
//   });

// // functions
// function init() {
//   num =  1;
  
//   render();
// }

// function render();

// init();

// const minusBtn = document.getElementById("minus");
//     minusBtn.addEventListener('click', function(subtract) {
//         var runningNum = runningNum ++;
//         console.log(subtract);
//     });

// const plusBtn = document.getElementById("plus");
//     plusBtn.addEventListener('click', function(add) {
//        var runningNum = runningNum --;
//        console.log(add);
//     });

let count = 0

const inputEl = document.querySelector("input");

inputEl.value = 1;

const $count = document.getElementsByClassName('count')[0]
$count.textContent = count

function increment() { $count.textContent = ++count }
function decrement() { $count.textContent = --count }




