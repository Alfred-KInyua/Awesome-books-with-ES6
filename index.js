import Books from './modules/classSection.js';
import menuSection from './modules/menuSection.js';
import { DateTime } from './modules/luxon.js';

menuSection.MenuItems();

const time = document.querySelector('.time');
const currentTime = DateTime.now();
time.innerHTML = `${currentTime.toJSDate()};`;

const formTitle = document.querySelector('#mytitle');
const formAuthor = document.querySelector('#myauthor');
const alfred = new Books(formTitle, formAuthor); // instantiate class Books with alfred object

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alfred.addbook();
  Books.reset();
  Books.retrieve();
});

Books.retrieve();
document.querySelectorAll('#erase').forEach((button, id) => {
  button.addEventListener('click', () => {
    Books.dellbooks(id);
    Books.retrieve();
  });
});