export class Plus {
  constructor(value) {
    this.value = value;
  }

  command(num) {
    return +this.value + +num;
  }
}
