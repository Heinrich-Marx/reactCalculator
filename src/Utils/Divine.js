export class Divine {
  constructor(value) {
    this.value = value;
  }

  command(num) {
    return +num / +this.value;
  }
}
