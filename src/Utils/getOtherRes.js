import { Minus } from './Minus';
import { Plus } from './Plus';
import { Multiply } from './Multiply';
import { Divine } from './Divine';
import { RemainsDivine } from './RemainsDivine';

export const getOtherRes = (calc, lastV, preLastV, operator, stack) => {
  calc.value = preLastV;
  switch (operator) {
    case '+':
      calc.command(new Plus(lastV));
      break;
    case '-':
      calc.command(new Minus(lastV));
      break;
    case '*':
      calc.command(new Multiply(lastV));
      break;
    case '%':
      calc.command(new RemainsDivine(lastV));
      break;
    default:
      calc.command(new Divine(lastV));
  }
  stack.pop();
  stack.pop();
  stack.push(calc.value);
};
