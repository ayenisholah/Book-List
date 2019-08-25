class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
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

  showError(message, className) {
    // Create element
    const div = document.createElement('div');

    // Add classes
    div.className = `alert ${className}`

    // Add text
    div.appendChild(document.createTextNode(message));

    // Get Parent
    const container = document.querySelector('.container');

    // Get Form
    const form = document.querySelector('#book-form');

    // Insert Alert
    container.insertBefore(div, form);

    // Timeout after 3 seconds;
    setTimeout(function () {
      document.querySelector('.alert').remove()
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get Form Values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Instatiate Book
  const book = new Book(title, author, isbn)

  // Instatiate UI
  const ui = new UI();
  if (title === '' || author === '' || isbn === '') {
    // Error Alert
    ui.showError('Please fill in all field', 'error');
  } else {
    // Add Book to list
    ui.addBookToList(book);

    // Show Alert
    ui.showError('Book Added', 'success');

    // Clear fields after adding book
    ui.clearFields(book)
  }
  e.preventDefault();

});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteBook(e.target)
  // Show Alert
  ui.showError('Book deleted', 'success')
  e.preventDefault();
})