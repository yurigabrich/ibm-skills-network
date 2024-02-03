let books = [];

function saveBook(index='') {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (!(bookName && authorName && bookDescription && !isNaN(pagesNumber))) {
        alert('Please fill in all fields correctly.');
    } else {
        if (index !== '') {
            updateBook(index, bookName, authorName, bookDescription, pagesNumber);
        } else {
            addBook(bookName, authorName, bookDescription, pagesNumber);
        }
        showBooks();
        clearInputs();
    }
}

function addBook(bookName, authorName, bookDescription, pagesNumber) {
    books.push({
        name: bookName,
        authorName: authorName,
        bookDescription: bookDescription,
        pagesNumber: pagesNumber
    });
}

function updateBook(index, bookName, authorName, bookDescription, pagesNumber) {
    books[index] = {
        name: bookName,
        authorName: authorName,
        bookDescription: bookDescription,
        pagesNumber: pagesNumber
    };
    document.getElementById('btn_save').innerText = "Add Book";
    document.getElementById('btn_save').onclick = function () { saveBook(); };
}

function editBook(index) {
    document.getElementById('bookName').value = books[index].name;
    document.getElementById('authorName').value = books[index].authorName;
    document.getElementById('bookDescription').value = books[index].bookDescription;
    document.getElementById('pagesNumber').value = books[index].pagesNumber;
    document.getElementById('btn_save').innerText = "Save Book";
    document.getElementById('btn_save').onclick = function () { saveBook(index); };
}

function deleteBook(index) {
    books.splice(index, 1);
    showBooks();
}

function showBooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
                                                <p><strong>Book Name: </strong>${book.name}</p>
                                                <p><strong>Author Name:</strong> ${book.authorName} </p>
                                                <p><strong>Book Description:</strong> ${book.bookDescription}</p>
                                                <p><strong>No. of Pages:</strong> ${book.pagesNumber}</p>
                                                <button onclick="editBook(${index})">Edit</button>
                                                <button onclick="deleteBook(${index})">Delete</button>`).join('');
    document.getElementById('books').innerHTML = booksDiv;
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
