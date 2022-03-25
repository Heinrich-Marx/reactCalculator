import { Minus } from './Minus';
import { Plus } from './Plus';
import { Multiply } from './Multiply';
import { Divine } from './Divine';
import { RemainsDivine } from './RemainsDivine';

export const getFirstRes = (calc, lastV, preLastV, operator, stack) => {
  switch (operator) {
    case '+':
      calc.command(new Plus(preLastV));
      calc.command(new Plus(lastV));
      break;
    case '-':
      calc.command(new Plus(preLastV));
      calc.command(new Minus(lastV));
      break;
    case '*':
      calc.command(new Plus(preLastV));
      calc.command(new Multiply(lastV));
      break;
    case '%':
      calc.command(new Plus(preLastV));
      calc.command(new RemainsDivine(lastV));
      break;
    default:
      calc.command(new Plus(preLastV));
      calc.command(new Divine(lastV));
  }
  stack.pop();
  stack.pop();
  stack.push(calc.value);
};
