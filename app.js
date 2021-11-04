/*
// How does submit work? How do you obtain the element.value?

*/

// Get buttons
const bookForm = document.querySelector(".bookForm")
const addBook = document.querySelector(".addBook")
const resultTemp = document.querySelector(".result")
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
    // this.read = read
    // this.info = function() {
    //     return `${this.title} by ${this.author}, ${pages} pages, ${this.read}`
    // }
}

// Book form to submit
bookForm.addEventListener("submit", function(e) {
    e.preventDefault()

    console.log(bookTitle.value)
    console.log(bookAuthor.value)
    console.log(bookPages.value)
    console.log("Hello form is submitted!")
    addBookToLibrary()
})

function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value)
    library.push(newBook)
    console.log(library)
    console.log(newBook)
    resultTemp.innerHTML = library[0].title // to get first title (we can create a loop here)
    bookTable.innerHTML = `<td>1<td>` // This doesn't work! FIND A FIX!
}

// Add a function that adds a book row to the existing table
// -- This function can run as a callback function in the "AddBookToLibrary"
// -- Use temporary new Objection for now to test the function 
function addBookToTable() {
    // Us
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value)




}


console.log(library)