// Array of books
const library = [];

// Variable for library div
const elemLibrary = document.querySelector(".library");
// Variable for popup button
const btnNewBook = document.querySelector(".new-book");
// Variable for popup
const popup = document.querySelector("[popup]")
// Buttons inside popup
const btnAdd = document.querySelector(".add");
const btnClose = document.querySelector(".close");
// Inputs inside popup
const inputTitle = document.querySelector("#title")
const inputAuthor = document.querySelector("#author")
const inputPages = document.querySelector("#pages")

// Class for book objects
class Book {
    constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.id = crypto.randomUUID();
    }
}

// Controller class
class Controller {
    // Function for displaying all books contained in library
    displayLibrary() {
        for (let i = 0; i < library.length; i++) {
            // Create element for the book-card
            const book = document.createElement("div");
            book.classList.add("book")

            // Create info elements for card
            const titleHeader = document.createElement("h2");
            titleHeader.textContent = "Title";
            const title = document.createElement("h3");
            title.textContent = library[i].title;

            const authorHeader = document.createElement("h2");
            authorHeader.textContent = "Author";
            const author = document.createElement("h3");
            author.textContent = library[i].author;

            const pagesHeader = document.createElement("h2");
            pagesHeader.textContent = "Pages";
            const pages = document.createElement("h3");
            pages.textContent = library[i].pages;

            // Create button for card and put them inside div
            const divButtons = document.createElement("div");
            divButtons.classList.add("card-button-container");

            const btnRead = document.createElement("button");
            btnRead.classList.add("btn-read");
            if (library[i].read) {
                btnRead.classList.add("done");
                btnRead.textContent = "Read";
            } else {
                btnRead.textContent = "Reading";
            }
            

            const btnRemove = document.createElement("button");
            btnRemove.classList.add("btn-remove");
            btnRemove.textContent = "Remove";

            divButtons.appendChild(btnRead);
            divButtons.appendChild(btnRemove);

            // Event listener for read button
            btnRead.addEventListener("click", () => {
                if (btnRead.classList.contains("done")) {
                    library[i].read = false;
                    btnRead.textContent = "Reading";
                    btnRead.classList.remove("done");
                } else {
                    library[i].read = true;
                    btnRead.classList.add("done");
                    btnRead.textContent = "Read";
                }
            })

            btnRemove.addEventListener("click", () => {
                library.splice(i, 1);
                clearLibrary();
                this.displayLibrary();
            })

            // Append info to book-card
            book.appendChild(titleHeader);
            book.appendChild(title);

            book.appendChild(authorHeader);
            book.appendChild(author);

            book.appendChild(pagesHeader);
            book.appendChild(pages);

            book.appendChild(divButtons);

            // Add book to library div
            elemLibrary.appendChild(book);
        }
    }

    addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);

    library.push(book);
}
}

const cntrlr = new Controller();

// Function for adding new books
/* function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);

    library.push(book);
} */

// Function for clearing library
function clearLibrary() {
    let child = elemLibrary.lastElementChild;
    while (child) {
        elemLibrary.removeChild(child);
        child = elemLibrary.lastElementChild;
    }
}

/// Event listeners

// New book button
btnNewBook.addEventListener("click", () => {
    popup.showModal();
})

// Add book button
btnAdd.addEventListener("click", (e) => {
    e.preventDefault(); // Cancel default form button functionallity

    // Values for new book properties
    const nBookTitle = inputTitle.value;
    const nBookAuthor = inputAuthor.value;
    const nBookPages = inputPages.value;

    if (nBookTitle != false && nBookAuthor != false && nBookPages != false) {
        // Add book, clear old and display new library, reset input values, close popup

        cntrlr.addBookToLibrary(nBookTitle, nBookAuthor, nBookPages);

        clearLibrary();
        cntrlr.displayLibrary();

        inputTitle.value = "";
        inputAuthor.value = "";
        inputPages.value = "";

        popup.close();
    }
    
})

// Close popup button
btnClose.addEventListener("click", (e) => {
    e.preventDefault();

    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";

    popup.close();
})