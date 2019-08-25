// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
};

// UI Constructor
function UI() { }

// Add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');
  // Create Tr element
  const row = document.createElement('tr');
  // Insert Cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>

  `
  list.appendChild(row);
}

// Clear book fields
UI.prototype.clearFields = function (books) {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';

}


// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get Form Values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Instatiate Book
  const book = new Book(title, author, isbn)

  // Instatiate UI
  const ui = new UI();
  console.log(ui);

  // Add Book to list
  ui.addBookToList(book);

  // Clear fields after adding book
  ui.clearFields(book)
  e.preventDefault();

});