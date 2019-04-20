export default class Counter {
  constructor(INIT_COUNT) {
    // 초기화, 속성
    this.count = typeof INIT_COUNT === 'number' ? INIT_COUNT : 0;
  }

  getCount() {
    return this.count;
  }

  // 증가
  increment(x) {
    this.count = this.count + x || this.count + 1;
    if (typeof x !== 'number') {
      return `숫자만 넣어주세요`;
    }
  }

  // 감소
  decrement(x) {
    this.count = this.count - x || this.count - 1;
    if (typeof x !== 'number') {
      return `숫자만 넣어주세요`;
    }
  }

  // reset
  reset(x) {
    this.count = x || 0;
  }
}
