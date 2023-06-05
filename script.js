const showButton = document.getElementById('showDialog');
const infoDialog = document.getElementById('bookInfoDialog');
const titleOutput = document.getElementById('title');
const authorOutput = document.getElementById('author');
const pagesOutput = document.getElementById('pages');
const readOutput = document.getElementById('power');
const confirmBtn = infoDialog.querySelector('#confirmBtn');

// show the book info dialog

showButton.addEventListener('click', () => {
  infoDialog.showModal();
 
});

// clear form spaces

infoDialog.addEventListener('close', (e) => {
  titleOutput.value = '';
  authorOutput.value = '';
  pagesOutput.value = '';
});

// add info to myLibrary array

confirmBtn.addEventListener('click', (event) => {
  event.preventDefault(); 
  addBookToLibrary (titleOutput.value, authorOutput.value, pagesOutput.value, readOutput.value);
  console.log(myLibrary)
 infoDialog.close();
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
  
  myLibrary.push(new Book(title, author, pages, read))
}
// addBookToLibrary('padre rico padre pobre', 'robert kiyosaky', 123, 'read');
// addBookToLibrary('Cien anos de soledad', 'Gabriel Garcia Marquez', 200, 'Not read yet');

// console.log(myLibrary[0].info())