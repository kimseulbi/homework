export default function sum(num) {
  let result = 0;
  if (typeof num !== 'number') {
    return `숫자를 넣어주세요`;
  } else {
    for (let item of arguments) {
      result += item;
    }
    return result;
  }
}
