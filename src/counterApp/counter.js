export default class Counter {
  constructor(count = 0) {
    // 초기화, 속성
    this.count = this.isNumber(count) ? count : 0;
  }

  isNumber(input) {
    return typeof input === 'number';
  }

  getCount() {
    return this.count;
  }

  // 증가
  increment(num = 1) {
    return this.isNumber(num) ? (this.count += num) : '숫자만 넣어주세요!';
  }

  // 감소
  decrement(num = 1) {
    return this.isNumber(num) ? (this.count -= num) : '숫자만 넣어주세요!';
  }

  // reset
  reset(num = 0) {
    return this.isNumber(num) ? num : 0;
  }
}
