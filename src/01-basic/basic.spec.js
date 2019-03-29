import sum from './basic.js';

describe('숫자를 더하는 함수', function() {
  it('1 + 2 = 3', function() {
    expect(sum(1, 2)).toBe(3);
  });

  it('문자열 대응', function() {
    expect(sum('1, 2')).toBe('숫자를 넣어주세요');
  });

  it('불리언 대응', function() {
    expect(sum(true, false)).toBe('숫자를 넣어주세요');
  });

  it('배열 대응', function() {
    expect(sum([1, 2])).toBe('숫자를 넣어주세요');
  });

  it('1 + 2 + 3 + 4 + 5 = 15', function() {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
