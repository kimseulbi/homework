import Counter from './counter.js';

const counterNumEl = document.querySelector('.counter');
const incrementEl = document.querySelector('.btn_increment');
const decrementEl = document.querySelector('.btn_decrement');
const resetEl = document.querySelector('.btn_reset');

const counter = new Counter();

counterNumEl.textContent = counter.getCount();

incrementEl.addEventListener('click', (e) => {
  console.log('increment click');
  const result = counter.increment();
  counterNumEl.innerHTML = result;
  console.log(counterNumEl.textContent);
});

decrementEl.addEventListener('click', (e) => {
  console.log('decrement click');
  const result = counter.decrement();
  counterNumEl.innerHTML = result;
  console.log(counterNumEl.textContent);
});

resetEl.addEventListener('click', (e) => {
  console.log('reset click');
  const result = counter.reset();
  counterNumEl.innerHTML = result;
  console.log(counterNumEl.textContent);
});
