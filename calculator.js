// declare variables.
let display;

// get display class.
display = document.querySelector('.display');

// function to display nums.
function dispNum(num) {
    switch(num) {
        case 1:
            display.value += 1;
            break;
        case 2:
            display.value += 2;
            break;
        case 3:
            display.value += 3;
            break;
        case 4:
            display.value += 4;
            break;
        case 5:
            display.value += 5;
            break;
        case 6:
            display.value += 6;
            break;
        case 7:
            display.value += 7;
            break;
        case 8:
            display.value += 8;
            break;
        case 9:
            display.value += 9;
            break;
        case 0:
            display.value += 0;
            break;
    }
}

// function to calculate inputs on display.
function calc() {
    display.value = eval(display.value);
}

// function to display oparations.
function dispOpr(oparation) {
    switch(oparation) {
        case '+':
            display.value += '+';
            break;
        case '%':
            display.value += '%';
            break;
        case '-':
            display.value += '-';
            break;
        case '*':
            display.value += '*';
            break;
        case '/':
            display.value += '/';
            break;
     
    }
}

// function to clear inputs on display.
function cls() {
    display.value = '';
}


// function to excute length of inputs on the screen.
function len() {
    let x = display.value;
    alert("length of nums on screen is " + x.length);
}


// function to remove last char on screen.
function backspace() {
    let x = display.value;
    if(x.length > 0) {
        x = x.substring(0, x.length - 1);
        display.value = x;
      }
}

// function to append brackets.
let i = 0;
function brackets() {
    if(i == 0) {
        display.value += "(";
        i = 1;
    } else if(i == 1) {
        display.value += ")";
        i = 0;
    }
}