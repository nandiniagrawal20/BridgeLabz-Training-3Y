"use strict";

// Create Book class
class Book {

    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue a book
    issueBook() {

        if (!this.isIssued) {
            this.isIssued = true;
            console.log(this.title + " issued successfully.");
        } else {
            console.log(this.title + " is already issued.");
        }
    }

    // Return a book
    returnBook() {

        if (this.isIssued) {
            this.isIssued = false;
            console.log(this.title + " returned successfully.");
        } else {
            console.log(this.title + " was not issued.");
        }
    }
}

// Create book objects
const books = [

    new Book("JavaScript Basics", "John", "101"),
    new Book("Python Programming", "David", "102"),
    new Book("Data Structures", "Mark", "103"),
    new Book("Web Development", "Smith", "104"),
    new Book("Java Programming", "James", "105")

];

// Display available books
function displayAvailableBooks() {

    console.log("\n----- AVAILABLE BOOKS -----");

    const availableBooks = books.filter(book => !book.isIssued);

    availableBooks.forEach(book => {

        console.log(
            "Title:", book.title,
            "| Author:", book.author,
            "| ISBN:", book.ISBN
        );

    });
}

// Search book using ISBN
function searchBook(isbn) {

    return books.find(book => book.ISBN === isbn);

}

// Display available books initially
displayAvailableBooks();

// Take ISBN from user
const searchISBN = prompt("Enter ISBN to issue a book:");

// Search and issue book
const selectedBook = searchBook(searchISBN);

if (selectedBook) {

    selectedBook.issueBook();

} else {

    console.log("Book not found!");

}

// Display available books after issuing
displayAvailableBooks();