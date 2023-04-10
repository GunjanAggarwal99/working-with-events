// Import stylesheets
import './style.css';

// Write Javascript code!
const btnsClick = document.querySelector('button');
const buttonClickHandler = (event) => {
  // event.target.disabled = true;
  console.log(event);
};
/* if we use onclick then we cann't add multiple function on click */
// btnClick.onclick = buttonClickHandler;

// const btnbind = buttonClickHandler.bind(this);

// btnClick.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   btnClick.removeEventListener('click', btnbind);
// }, 9000);

// btnsClick.forEach((btn) => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });
const div = document.querySelector('div');
div.addEventListener('click', (event) => {
  console.log('Clicked Div');
  console.log(event);
});
btnsClick.addEventListener('click', (event) => {
  event.stopPropagation();
  // event.stopImmediatePropagation();/*more then one event listener on button*/
  console.log('Clicked button');
  console.log(event);
});
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); //event not only give properties but also gives us method, preventDefault is object in event
  console.log(event);
});

const listItem = document.querySelectorAll('li');
const list = document.querySelector('ul');
// listItem.forEach((listitem) => {
//   listitem.addEventListener('click', (event) => {
//     event.target.classList.toggle('hightLight');
//   });
// });

list.addEventListener('click', function (event) {
  event.target.closest('li').classList.toggle('hightLight');
  // form.submit();
  btnsClick.click();
  console.log(this);
});
