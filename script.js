
const display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = null;
let memory = 0;

document.getElementById('buttons').addEventListener('click', function(event) {
  const value = event.target.dataset.value;

  if (!isNaN(value) || value === '.') {
    if (operator) {
      operand2 += value;
      display.value = operand2;
    } else {
      operand1 += value;
      display.value = operand1;
    }
  } else if (value === 'C') {
    operand1 = '';
    operand2 = '';
    operator = null;
    display.value = '';
  } else if (value === '=') {
    operand1 = eval(operand1 + operator + operand2);
    operand2 = '';
    operator = null;
    display.value = operand1;
  } else if (value === '1/x') {
    operand1 = 1 / parseFloat(operand1);
    display.value = operand1;
  } else if (value === 'x2') {
    operand1 = Math.pow(parseFloat(operand1), 2);
    display.value = operand1;
  } else if (value === '10x') {
    operand1 = Math.pow(10, parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'sqrt') {
    operand1 = Math.sqrt(parseFloat(operand1));
    display.value = operand1;
  } else if (value === '+/-') {
    if (operator) {
      operand2 = (-parseFloat(operand2)).toString();
      display.value = operand2;
    } else {
      operand1 = (-parseFloat(operand1)).toString();
      display.value = operand1;
    }
  } else if (value === 'sin') {
    operand1 = Math.sin(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'cos') {
    operand1 = Math.cos(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'tan') {
    operand1 = Math.tan(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'log') {
    operand1 = Math.log(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'exp') {
    operand1 = Math.exp(parseFloat(operand1));
    display.value = operand1;
  } else if (value === '|x|') {
    operand1 = Math.abs(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'ceil') {
    operand1 = Math.ceil(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'floor') {
    operand1 = Math.floor(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'asin') {
    operand1 = Math.asin(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'acos') {
    operand1 = Math.acos(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'atan') {
    operand1 = Math.atan(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'sinh') {
    operand1 = Math.sinh(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'cosh') {
    operand1 = Math.cosh(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'tanh') {
    operand1 = Math.tanh(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'asinh') {
    operand1 = Math.asinh(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'acosh') {
    operand1 = Math.acosh(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'atanh') {
    operand1 = Math.atanh(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'log10') {
    operand1 = Math.log10(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'ln') {
    operand1 = Math.log(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'trunc') {
    operand1 = Math.trunc(parseFloat(operand1));
    display.value = operand1;
  } else if (value === 'MC') {
    memory = 0;
  } else if (value === 'MR') {
    display.value = memory;
  } else if (value === 'MS') {
    memory = parseFloat(display.value);
  } else if (value === 'M+') {
    memory += parseFloat(display.value);
  } else if (value === 'M-') {
    memory -= parseFloat(display.value);
  } else {
    operator = value;
  }
});