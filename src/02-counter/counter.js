export default class Counter {
  constructor(INIT_COUNT) {
    this.count = typeof INIT_COUNT === 'number' ? INIT_COUNT : 0;
  }
  getCount() {
    return this.count;
  }

  increment(x) {
    this.count = this.count + x || this.count + 1;
    if (typeof x !== 'number') {
      return `숫자만 넣어주세요`;
    }
  }
  decrement(x) {
    this.count = this.count - x || this.count - 1;
    if (typeof x !== 'number') {
      return `숫자만 넣어주세요`;
    }
  }
  reset(x) {
    this.count = x || 0;
  }
}
