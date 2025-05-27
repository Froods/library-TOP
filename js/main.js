// Array of books
const library = [];

// Variable for library div
const elemLibrary = document.querySelector(".library");


// Constructor for book objects
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.id = crypto.randomUUID();
}

// Function for adding new books
function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);

    library.push(book);
}

function displayLibrary() {
    for (let i = 0; i < library.length; i++) {
        // Create element for the book-card
        const book = document.createElement("div");
        book.classList.add("book")

        // Create sub-elements for the book-card
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



        // Append info to book-card
        book.appendChild(titleHeader);
        book.appendChild(title);

        book.appendChild(authorHeader);
        book.appendChild(author);

        book.appendChild(pagesHeader);
        book.appendChild(pages);

        // Add book to library div
        elemLibrary.appendChild(book);
    }
}

addBookToLibrary("harry p", "diller", 7);
addBookToLibrary("peter", "sandal", 12);
displayLibrary();