'use strict';
const number = document. querySelectorAll(".number")
const operator = document. querySelectorAll(".operator")
const input = document.getElementById("input");
const equal = document. querySelector(".equal")
const clear = document.querySelector("#clear")
let arrayOperators = [];//array of operators
let arrayNumbers = [];//array of numbers
let arrayNumbersInput=[];//array used to take number inputs
let inputArray = [];//array used to take number inputs
let inputArray1 = [];//array used to display on the calc screen
let inputValue = 0;
let arrayNumbersIn = [];
let i = 0;//increment for numbers array
let p = -1;//increment for input
let j = -1;
let k = -1;
let flag = 1;
number.forEach(function(number){//Event listner for calculator numbers
    number.addEventListener('click', function (event) {
        event.preventDefault();
        p++;
        k++;//increment for the input array 
        inputArray1[k]=number.innerHTML;
        inputArray[k]=number.innerHTML;
        input.innerHTML = inputArray1.join("");//displaying input array to calc
        arrayNumbersInput[p]=inputArray.join("");
        flag = 0;//flag to make sure double operator not possible
      });
  });
  operator.forEach(function(operator){//Event listner for calculator operators
    operator.addEventListener('click', function (event) {
        event.preventDefault();
        inputValue=arrayNumbersInput.splice(-1,1)// Storing numbers in an array in integer format
        arrayNumbersInput.splice(0, arrayNumbersInput.length)//clear array
        inputArray.splice(0, inputArray.length)//clear array
        arrayNumbersIn[i] = Number(inputValue)
        inputValue=""
        i=i+1;
        if (flag != 1){
            j++;
            k++;
            arrayOperators[j]=operator.innerHTML//populating operator with button
            inputArray1[k]=arrayOperators[j];//assigning operator to inpur array
            input.innerHTML = inputArray1.join(" ");//displaying input array 
            flag = 1;//flag to make sure double operator not possible
        }
    });
  });
  equal.addEventListener('click', function (event) {//event listner for equal button
    event.preventDefault();
        inputValue=arrayNumbersInput.splice(-1,1) // Storing numbers in an array in integer format
        arrayNumbersInput.splice(0, arrayNumbersInput.length)//clear array
        inputArray.splice(0, inputArray.length)//clear array
        arrayNumbersIn[i] = Number(inputValue)
        inputValue=""
    let multiplication = arrayOperators.indexOf("*")
    while (multiplication !== -1){
        arrayNumbersIn.splice(0,2,arrayNumbersIn[0]*arrayNumbersIn[1])
        arrayOperators.splice(0,1)//removes operator from array
        multiplication = arrayOperators.indexOf("*")
    }
    let division = arrayOperators.indexOf("/")
    while (division !== -1){
        arrayNumbersIn.splice(0,2,arrayNumbersIn[0]/arrayNumbersIn[1])
        arrayOperators.splice(0,1)//removes operator from array
        division = arrayOperators.indexOf("/")
    }
    let addition = arrayOperators.indexOf("+")
    while (addition !== -1){
        arrayNumbersIn.splice(0,2,arrayNumbersIn[0]+arrayNumbersIn[1])
        arrayOperators.splice(0,1)//removes operator from array
        addition = arrayOperators.indexOf("+")
    }
    let subtraction = arrayOperators.indexOf("-")
    while (subtraction !== -1){
        arrayNumbersIn.splice(0,2,arrayNumbersIn[0]-arrayNumbersIn[1])
        arrayOperators.splice(0,1)//removes operator from array
        subtraction = arrayOperators.indexOf("-")
    }
    input.innerHTML = "="+arrayNumbersIn//outputing to screen
  });
  clear.addEventListener('click', function (event) {  //event listner for clear button
    event.preventDefault();
    location.reload(); //reloads the page to clear the calculator screen
  });