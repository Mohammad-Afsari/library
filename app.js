let myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${pages} pages, ${this.read}`
    }
}

const book1 = new Book("The Hobbit", "J.R.R Tolkien", "295", "not read yet")

Book.prototype.print = function () {
    console.log(this.title + "is dead")
}