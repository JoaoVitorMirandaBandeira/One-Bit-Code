export class Transaction {
  #name;
  #value;
  #date;
  constructor(name, value) {
    this.#name = name;
    this.#value = value;
    this.setDate();
  }
  get name() {
    return this.#name;
  }
  get value() {
    return this.#value;
  }
  get date() {
    return this.#date;
  }

  setDate() {
    let date = new Date();
    date = date.toLocaleDateString();
    this.#date = date;
  }
}
