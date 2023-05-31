const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const selectEl = favDialog.querySelector('select');
const confirmBtn = favDialog.querySelector('#confirmBtn');

showButton.addEventListener('click', () => {
  favDialog.showModal();
});

selectEl.addEventListener('change', (e) => {
  confirmBtn.value = selectEl.value;
});

favDialog.addEventListener('close', (e) => {
  outputBox.value = favDialog.returnValue === 'default' ? "No return value." : `ReturnValue: ${favDialog.returnValue}.`;
});

confirmBtn.addEventListener('click', (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});

let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function () {
    console.log(this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read) 
};

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  myLibrary.push(new Book(title, author, pages, read))
}
// addBookToLibrary('padre rico padre pobre', 'robert kiyosaky', 123, 'read');
// addBookToLibrary('Cien anos de soledad', 'Gabriel Garcia Marquez', 200, 'Not read yet');

console.log(myLibrary[0].info())