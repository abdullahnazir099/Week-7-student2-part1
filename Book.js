function showBooks() {
    fetch('/.netlify/functions/allBooks')
      .then(response => response.json())
      .then(books => {
        const booksContainer = document.getElementById('books-container');
        const bookList = books.map(book => `
         
          <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>${book.published_year}</td>
            <td>${book.genre}</td>
            <td>
           
              <button class="btn btn-sm btn-info" onclick="openEditModal(${book.id})">Edit</button>
                   <button class="btn btn-sm btn-danger" onclick="confirmDelete(${book.id})">Delete</button>
            </td>
          </tr>
        `).join('');
        booksContainer.innerHTML = `<table>${bookList}</table>`;
      })
      .catch(error => console.error('Error fetching books:', error));
  }
  document.addEventListener('DOMContentLoaded', showBooks);
    // Run the showBooks function on page load
    document.addEventListener('DOMContentLoaded', showBooks());