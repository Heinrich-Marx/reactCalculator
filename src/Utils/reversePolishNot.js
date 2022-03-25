import { Calculator } from './Calculator';
import { getFirstRes } from './getFirstRes';
import { getOtherRes } from './getOtherRes';

const checkForNumber = (str) => !Number.isNaN(+str);

const countNumAfterComma = (num) =>
  num.toString().includes('.') ? num.toString().split('.').pop().length : 0;

export const reversePolishNot = (string) => {
  const resultArray = [];
  const resultStack = [];
  let number = '';
  if (string === 0) {
    return '0';
  }
  const arr = string.split('');
  arr.forEach((el, i) => {
    const lastOperator = resultStack[resultStack.length - 1];
    switch (el) {
      case '(':
        if (number) {
          resultArray.push(number);
          number = '';
        }
        resultStack.push(el);
        break;
      case '-':
      case '+':
        if (number) {
          resultArray.push(number);
          number = '';
        }
        if ('+-*/'.includes(lastOperator)) {
          resultArray.push(lastOperator);
          resultStack.pop();
          resultStack.push(el);
        } else {
          resultStack.push(el);
        }
        break;
      case '*':
      case '/':
        if (number) {
          resultArray.push(number);
          number = '';
        }
        if ('*/'.includes(lastOperator)) {
          resultArray.push(lastOperator);
          resultStack.pop();
          resultStack.push(el);
        } else {
          resultStack.push(el);
        }
        break;
      case ')':
        if (number) {
          resultArray.push(number);
          number = '';
        }
        if (resultStack.includes('(')) {
          while (resultStack[resultStack.length - 1] !== '(') {
            resultArray.push(resultStack[resultStack.length - 1]);
            resultStack.pop();
          }
          resultStack.pop();
        }
        //  resultStack.push(el);
        break;
      case '%':
        if (number) {
          resultArray.push(number);
          number = '';
        }
        resultStack.push(el);
        break;
      case '+/-':
        resultArray[resultArray.length - 1] =
          +resultArray[resultArray.length - 1] * -1;
        break;
      default:
        if (checkForNumber(el)) {
          number += el;
          if (i === arr.length - 1) resultArray.push(number);
        } else if (el === '.') {
          number += el;
        }
    }
  });
  for (let i = resultStack.length - 1; i >= 0; i--) {
    resultArray.push(resultStack[i]);
  }
  resultStack.pop();
  return calculatingValue(resultArray);
};

const calculatingValue = (arr) => {
  if (arr.length > 0) {
    const stack = [];
    const calculator = new Calculator();
    arr.forEach((el) => {
      const lastValue = stack[stack.length - 1];
      const preLastValue = stack[stack.length - 2];
      if (checkForNumber(el)) {
        stack.push(el);
      } else {
        !calculator.flag
          ? getFirstRes(calculator, lastValue, preLastValue, el, stack)
          : getOtherRes(calculator, lastValue, preLastValue, el, stack);
      }
    });
    if (stack.length === 1) {
      if (typeof +stack[0] === 'number' && Number.isFinite(+stack[0])) {
        const numAfterComma =
          countNumAfterComma(+stack[0]) > 2 ? 3 : countNumAfterComma(+stack[0]);
        return '' + Number(stack[0]).toFixed(numAfterComma);
      } else {
        return '0';
      }
    } else {
      return '0';
    }
  }
  return '0';
};
