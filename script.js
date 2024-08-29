const newBookBtn = document.getElementById("add-button");
const submitBtn = document.getElementById("submit");
const closeBtn = document.getElementById("close");
const formContainer = document.getElementById("form-container");
const displayContainer = document.getElementById("display-container");
const form = document.getElementById("book-form")

const myLibrary = [];

// My constructor function
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    const newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
    displayBook();
}

newBookBtn.addEventListener("click", () => {
    formContainer.showModal();
});

closeBtn.addEventListener("click", () => {
    formContainer.close();
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(author, title, pages, read);

    formContainer.close();
    form.reset();
});



function displayBook() {
    myLibrary.forEach((book, index) => {
        const bookContainer = document.createElement("div");

        removeBtn.className = "remove";
        removeBtn.type = "button";
        removeBtn.textContent = "Remove";
        statusBtn.className = "status";
        statusBtn.type = "button";
        statusBtn.textContent = "Read"

        bookContainer.className = "book-container";
        
        bookContainer.innerHTML = `
            <div class="author-display">
                <h3>${book.author}</h3>
            </div>
            <div class="title-display">
                <h2>${book.title}</h2>
            </div>
            <div class="page-display">
                <p>${book.pages} pages</p>
            </div>
            <div class="read-display">
                <p id="readText">${book.read ? "You have read" : "You have not read"}</p>
            </div>
            <div class="display-buttons">
                <button type="button" class="remove">Remove</button>
                <button type="button" class="toggle">Toggle</button>
            </div>
        
        `;

        displayContainer.appendChild(bookContainer);
        
        removeBtn.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            displayContainer.removeChild(bookContainer);
        });

        statusBtn.addEventListener("click", () => {
            const readText = document.getElementById("readText");
            readText.textContent = book.read ? "You have read this" : "You have not read this";
        });
    });
}
