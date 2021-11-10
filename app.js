
// Run functions
deleteBook()
deleteAllBooks()

// Get buttons
const bookForm = document.querySelector(".bookForm")
const addBook = document.querySelector(".addBook")
const bookTitle = document.getElementById("title")
const bookAuthor = document.getElementById("author")
const bookPages = document.getElementById("pages")
const bookTable = document.querySelector("bookRow")

let library = []

// Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
}

// Book form to submit
bookForm.addEventListener("submit", function(e) {
    e.preventDefault()
    addBookToLibrary()
})

// Add book to the library 
function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value)
    library.push(newBook)
    
    // Table row parent where the new books will go
    const bookTableParent = document.getElementById("bookRowParent")

    if (bookTitle.value === '' || bookAuthor.value === '' || bookPages.value === '') {
        alert("Please make sure you have filled out all fields. ")
    } else {
        // Create and append data to the new table row
        let newTableRow = document.createElement('tr')
        newTableRow.classList = 'bookRow'
        // Row data
        newTableRow.innerHTML = `
        <td>${library[library.length - 1].title}</td>
        <td>${library[library.length - 1].author}</td>
        <td>${library[library.length - 1].pages}</td>
        <td>        
            <div class="switch">
                <label>
                    <input type="checkbox">
                    <span class="lever"></span>
                </label>
            </div>
        </td>
        <td id="delete"><i class="material-icons prefix" id="deleteButton">delete</i></td>
        `
        bookTableParent.appendChild(newTableRow)
    }

    // Empty the title, author and pages once "Add Book" has been clicked
    bookTitle.value = ''
    bookAuthor.value = ''
    bookPages.value = ''

    deleteBook()
}

// Delete book from table
function deleteBook() {
    // Obtain element
    let delBook = document.querySelector("#bookRowParent")

    delBook.addEventListener("click", function(e){
        if (e.target.parentElement.id === "delete") {
            e.target.parentElement.parentElement.innerHTML = ''
        }
        
    })
}


// Delete modal confirmation
function deleteAllBooks() {
    // Obtain element
    let delAllBooks = document.querySelector(".bookRecords")
    let bookRows = document.getElementById("bookRowParent")

    delAllBooks.addEventListener("click", function(e){
        if (e.target.id === 'yes') {
            bookRows.innerHTML = ''
        }
    })   
}


// Delete modal confirmation
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, 0.5);
  });



// ========================================================== TESTING AREA ===================================================================== \\ 

