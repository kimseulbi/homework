import Counter from './counter.js';
describe('Counter APP', function() {
  describe('초기화', function() {
    const counter = new Counter();

    test('인스턴스 확인', function() {
      expect(counter).toBeInstanceOf(Counter);
    });

    test('카운트 프로퍼티 확인', function() {
      expect(counter).toHaveProperty('count');
      expect(counter).toHaveProperty('count', 0);
    });

    test('카운트 초기값 확인 (기본값)', function() {
      const INIT_COUNT = 0;

      expect(counter.getCount()).toBe(INIT_COUNT);
    });

    test('카운트 초기값 확인 (지정값)', function() {
      const INIT_COUNT = 5;
      const counter = new Counter(INIT_COUNT);

      expect(counter.getCount()).toBe(INIT_COUNT);
    });
  });

  describe('증가', function() {
    const counter = new Counter();

    test('증가 (기본값)', function() {
      counter.increment();
      counter.increment();
      counter.increment();
      counter.increment();

      expect(counter.getCount()).toBeGreaterThanOrEqual(3);
    });
  });

  describe('감소', function() {
    const counter = new Counter();

    test('감소 (기본값)', function() {
      counter.decrement();
      counter.decrement();
      counter.decrement();

      expect(counter.getCount()).toBeLessThanOrEqual(-3);
    });

    test('감소 (지정값)', function() {
      counter.decrement(5);
      counter.decrement(10);
      counter.decrement(15);

      expect(counter.getCount()).toBeLessThan(-10);
    });
  });

  describe('reset', function() {
    const counter = new Counter();

    test('리셋 (기본값)', function() {
      counter.increment(3);
      counter.decrement(2);
      counter.increment(1);
      counter.decrement(4);
      counter.increment(3);
      counter.decrement(5);

      counter.reset();

      expect(counter.getCount()).toBe(0);
    });

    test('리셋 (지정값)', function() {
      counter.increment(3);
      counter.decrement(2);
      counter.increment(1);
      counter.decrement(4);
      counter.increment(3);
      counter.decrement(5);

      counter.reset(10);

      expect(counter.getCount()).toBe(10);
    });
  });

  describe('예외처리', function() {
    const counter = new Counter();

    test('잘못된 초기화', function() {
      const wrongCounter = new Counter('AAAAA');

      expect(wrongCounter.getCount()).toBe(0);
    });

    test('잘못된 값 할당', function() {
      expect(counter.increment('AAA')).toMatch('숫자만 넣어주세요');
      expect(counter.decrement(true)).toMatch('숫자만 넣어주세요');
      expect(counter.increment({})).toMatch('숫자만 넣어주세요');
      expect(counter.decrement([])).toMatch('숫자만 넣어주세요');
    });
  });
});
