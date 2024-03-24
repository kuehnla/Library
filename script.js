const myLibrary = [];

const dialog = document.querySelector("dialog");

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", function(e) {
  dialog.showModal();
  const close = document.querySelector("#close");
  close.addEventListener("click", () => dialog.close());
});

const submit = document.querySelector("#submit");
submit.addEventListener("click", function(e) {
  e.preventDefault();
  addBookToLibrary();
});



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.querySelector("#titleIn").value;
  const author = document.querySelector("#authorIn").value;
  const pages = document.querySelector("#pageIn").value;
  const read = document.querySelector("#readIn").checked;
  myLibrary.push(new Book(title, author, pages, read == true ? "Read" : "Not read"));
  display(myLibrary[myLibrary.length - 1], myLibrary.length - 1);
  dialog.close();
}

function display(book, index) {
  const card = document.createElement("div"); // create card container
  card.setAttribute("class", "card");
  card.setAttribute("id", "i" + String(index));
  console.log(index);
  const title = document.createElement("div"); // create title container
  title.setAttribute("class", "title");
  const titleText = document.createElement("h3");
  titleText.textContent = book.title;
  title.appendChild(titleText);               // append to title container

  const author = document.createElement("div"); // create author container
  author.setAttribute("class", "author");
  const authorText = document.createElement("h4"); // create Author: element
  authorText.textContent = "Author:";
  const authorName = document.createElement("p"); // create name element
  authorName.textContent = book.author;
  author.appendChild(authorText);
  author.appendChild(authorName);             // append to author container

  const pages = document.createElement("div"); // create pages container
  pages.setAttribute("class", "pages");  
  const pagesText = document.createElement("h4"); // create pages label
  pagesText.textContent = "Pages:";
  const pagesAmt = document.createElement("p"); // create pages value
  pagesAmt.textContent = book.pages;
  pages.appendChild(pagesText); // append to pages container
  pages.appendChild(pagesAmt);

  const removeBtn = document.createElement("button"); // create buttons
  const readBtn = document.createElement("button");
  removeBtn.setAttribute("class", "remove");
  readBtn.setAttribute("class", "read");
  removeBtn.textContent = "Remove";
  readBtn.textContent = book.read;

  const cards = document.querySelector(".cards");

  removeBtn.addEventListener("click", function(e) {
    cards.removeChild(document.querySelector("#i" + index));
    myLibrary[index] = null;
  });

  readBtn.addEventListener("click", function(e) {
    readBtn.textContent = readBtn.textContent == "Read" ? "Not read" : "Read";
  });

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(removeBtn);
  card.appendChild(readBtn);

  cards.appendChild(card);
  console.log(card);
}