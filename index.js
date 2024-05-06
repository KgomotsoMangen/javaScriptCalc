//Variables
let isSumOperator = false;
let isSubOperator = false;
let isDivOperator = false;
let isMultOperator = false;
let isPrevButtonOp = false;
let currentSum = null;
let currentValue = null;
let currentValue2 = null;
let prevValue = null;
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let equal = document.getElementById("=");

let subF = document.getElementById("-");
let addF = document.getElementById("+");
let divF = document.getElementById("/");
let multF = document.getElementById("x");
let deleteF = document.getElementById("AC");
let sumS = document.getElementById("sum");

/**
 * Helper Functions
 */
function keepTrackOfOperator(opSign) {
  isDivOperator = false;
  isMultOperator = false;
  isSubOperator = false;
  isSumOperator = false;
  if (opSign === "+") isSumOperator = true;
  if (opSign === "-") isSubOperator = true;
  if (opSign === "*") isMultOperator = true;
  if (opSign === "/") isDivOperator = true;
}
//Checking Which op is active
function isOpActive() {
  if (isDivOperator === true) return true;
  if (isSubOperator === true) return true;
  if (isSumOperator === true) return true;
  if (isMultOperator === true) return true;
  return false;
}
//Equal Method
function equalSum() {
  if (isSumOperator === true) {
    currentSum = parseInt(prevValue) + parseInt(currentValue);
  }
  if (isSubOperator === true) {
    currentSum = parseInt(prevValue) - parseInt(currentValue);
  }
  if (isMultOperator === true) {
    currentSum = parseInt(prevValue) * parseInt(currentValue);
  }
  if (isDivOperator === true) {
    currentSum = parseInt(prevValue) / parseInt(currentValue);
  }
  prevValue = currentSum;
}
//Handle Operator event
function handleOpEvents(opSign) {
  if (isOpActive()) {
    if (prevValue != null && !isPrevButtonOp) {
      //Evaluating Sum
      equalSum();
    } else {
      prevValue = currentValue2;
      currentSum = prevValue;
    }
  } else {
    prevValue = currentValue;
    currentSum = prevValue;
  }
  //keeping track of which operator is active
  keepTrackOfOperator(opSign);

  //Setting Current Value
  if (currentValue != null) {
    currentValue = "";
  }
  let innrText;
  if (prevValue != null) {
    innrText = prevValue + opSign;
  } else {
    innrText = 0;
  }
  sumS.innerText = innrText;
  isPrevButtonOp = true;
}
//Method to update current value
function addingNumToSumScreewn(dataValue) {
  //updating my current value
  if (currentValue != null) {
    currentValue = currentValue + dataValue;
  } else {
    currentValue = dataValue;
  }
  currentValue2 = currentValue;
  //adding text to screen
  // let innrText;
  // if (currentSum != null) {
  //   innrText = sumS.innerText + currentValue;
  // } else {
  //   innrText = currentValue;
  // }
  // sumS.innerText = innrText;
  sumS.innerText = currentValue;
  isPrevButtonOp = false;
}

/**
 * Event Listeners
 */
addF.onclick = function () {
  handleOpEvents("+");
};
subF.onclick = function () {
  handleOpEvents("-");
};
multF.onclick = function () {
  handleOpEvents("*");
};
divF.onclick = function () {
  handleOpEvents("/");
};
equal.onclick = function () {
  equalSum();
  currentValue = currentSum;
  sumS.innerText = currentSum;
  //keeping track of which operator is active
  keepTrackOfOperator("null");
};

//numbers
zero.onclick = function () {
  addingNumToSumScreewn("0");
};
one.onclick = function () {
  addingNumToSumScreewn("1");
};
two.onclick = function () {
  addingNumToSumScreewn("2");
};
three.onclick = function () {
  addingNumToSumScreewn("3");
};
four.onclick = function () {
  addingNumToSumScreewn("4");
};
five.onclick = function () {
  addingNumToSumScreewn("5");
};
six.onclick = function () {
  addingNumToSumScreewn("6");
};
seven.onclick = function () {
  addingNumToSumScreewn("7");
};
eight.onclick = function () {
  addingNumToSumScreewn("8");
};
nine.onclick = function () {
  addingNumToSumScreewn("9");
};
deleteF.onclick = function () {
  keepTrackOfOperator("null");
  currentSum = null;
  currentValue = null;
  currentValue2 = null;
  prevValue = null;
  sumS.innerText = 0;
};
