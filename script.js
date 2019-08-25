// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
};

// UI Constructor
function UI() {  }

UI.prototype.addBookToList = function(book) {
  console.log(book)
}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get Form Values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  e.preventDefault();

  // Instatiate Book
  const book = new Book(title, author, isbn)
  console.log(book)
});