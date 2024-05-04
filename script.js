// declear some variables used later on
let num1 = 0;
let op = '';
let digits = '1234567890';

// SELECTION OF DIFFERENT BTNS FOR ADD FUNCTIONALITY

let screen = document.querySelector('.screen-container input');
let btnOne = document.querySelector('.btn-one');
let btnTwo = document.querySelector('.btn-two');
let btnThree = document.querySelector('.btn-three');
let btnPlus = document.querySelector('.btn-plus');
let btnFour = document.querySelector('.btn-four');
let btnFive = document.querySelector('.btn-five');
let btnSix = document.querySelector('.btn-six');
let btnMinus = document.querySelector('.btn-minus');
let btnSeven = document.querySelector('.btn-seven');
let btnEight = document.querySelector('.btn-eight');
let btnNine = document.querySelector('.btn-nine');
let btnDiv = document.querySelector('.btn-div');
let btnDot = document.querySelector('.btn-dot');
let btnZero = document.querySelector('.btn-zero');
let btnCut = document.querySelector('.btn-cut');
let btnMul = document.querySelector('.btn-mul');
let btnClear = document.querySelector('.btn-clear');
let btnSign = document.querySelector('.btn-sign');
let btnPercent = document.querySelector('.btn-percent');
let btnEqual = document.querySelector('.btn-equal');

// FUNCTIONALITY IS ADDED TO THESE BTNS

btnOne.addEventListener('click', populateFeild);
btnTwo.addEventListener('click', populateFeild);
btnThree.addEventListener('click', populateFeild);
btnPlus.addEventListener('click', setOperator);
btnFour.addEventListener('click', populateFeild);
btnFive.addEventListener('click', populateFeild);
btnSix.addEventListener('click', populateFeild);
btnMinus.addEventListener('click', setOperator);
btnSeven.addEventListener('click', populateFeild);
btnEight.addEventListener('click', populateFeild);
btnNine.addEventListener('click', populateFeild);
btnDiv.addEventListener('click', setOperator);
btnDot.addEventListener('click', populateFeild);
btnZero.addEventListener('click', populateFeild);
btnCut.addEventListener('click', backSpace);
btnMul.addEventListener('click', setOperator);
btnClear.addEventListener('click', () => {
  screen.value = '';
});
btnSign.addEventListener('click', () => {
  screen.value = -screen.value;
});
btnPercent.addEventListener('click', () => {
  screen.value = screen.value / 100;
});
btnEqual.addEventListener('click', setResult);

// FUNCTION FOR REMOVING A SINGLE DIGIT

function backSpace(e) {
  screen.value = screen.value.slice(0, -1);
}

// FUNCTION FOR DISPLAYING THE CLICKED BTN TEXT ON SCREEN

function populateFeild(e) {
  screen.value += e.target.textContent;
}

// SETS THE OPERATOR ON CLICK FOR BASIC MATH CALCULATION 
function setOperator(e) {
  op = e.target.value;
  num1 = parseFloat(screen.value);
  screen.value = '';
}

// POPULATES THE FIELD/SCREEN WITH THE RESULT OF PREVOUS CALCULATION 
function setResult(e) {
  if (digits.includes(e.target.textContent)) {
    screen.value += e.target.textContent;
  }
  let num2 = parseFloat(screen.value);
  let answer = operate(num1, op, num2);
  screen.value = `${answer}`;
}
// DECIDES WHICH MATH CALCULATION FUNCTION TO CALL DEPENDS ON OPERATOR
function operate(a, op, b) {
  switch (op) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
  }
}

// BASIC MATH FUNCTIONS
function add(a, b) {
  return (a + b);
}
function subtract(a, b) {
  return (a - b);
}
function multiply(a, b) {
  return (a * b);
}
function divide(a, b) {
  if (!b) return `denamonitor can not be zero`;
  return (a / b).toFixed(2);
}
