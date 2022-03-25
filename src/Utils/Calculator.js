export class Calculator {
  constructor() {
    this.value = 0;
    this.flag = false;
  }

  command(operator) {
    this.flag = true;
    this.value = operator.command(this.value);
  }
}
