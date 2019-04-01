// default: 기본!
// 한파일에 한번만 사용 할수 있음.
// arguments:  유사 배열 객체(array-like object)이자 반복 가능한 객체(iterable object)로, 함수에 주어진 인수가 순서대로 저장되기 때문에 인덱스를 가지고 인수를 읽어오거나 for...of를 통해 순회할 수 있습니다
export default function sum() {
  const arr = Array.from(arguments);
  const arrSum = arr.reduce((acc, item) => acc + item, 0);

  for (const item of arr) {
    if (typeof item !== 'number') {
      return `숫자를 넣어주세요`;
    }
    return arrSum;
  }
}
