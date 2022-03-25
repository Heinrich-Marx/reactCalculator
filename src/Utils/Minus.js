export class Minus {
  constructor(value) {
    this.value = value;
  }

  command(num) {
    return +num - +this.value;
  }
}
