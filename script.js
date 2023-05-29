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
addBookToLibrary('padre rico padre pobre', 'robert kiyosaky', 123, 'read');
addBookToLibrary('Cien anos de soledad', 'Gabriel Garcia Marquez', 200, 'Not read yet');

console.log(myLibrary[0].info())