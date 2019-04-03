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
