const container = document.getElementsByClassName('container');
const addBookBtn = document.getElementById('new-book');
const bookInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
const formModal = document.getElementById('modal');

const readBtn = document.createElement('div');
const removeBtn = document.createElement('div');

let myLibrary = [ {title: 'test1', author: 'test2', pages:111, read:true}];


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages 
    this.read = read
}


//Book.prototype.addBookToLibrary = function () {
//   myLibrary.push(this)
//}

let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener('click', addBookToLibrary)

function addBookToLibrary() {
    let bookInput = document.getElementById("title").value
    let authorInput = document.getElementById("author").value
    let pagesInput = document.getElementById("pages").value;
    let readInput = document.getElementById("read").checked;


    if (bookInput !== '' && authorInput !== '' && pagesInput !== '' ) {
        myLibrary.push(new Book (bookInput, authorInput, pagesInput, readInput));
        displayLibrary();
        clearForm();
        hideModal();
    } else {
        alert('Please fill out the form!')
    }
}


const displayLib = document.getElementById("libraryCard");
function displayLibrary() {
    displayLib.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
                 removeBtn.innerHTML = 
                             `<button class="remove-btn" onclick="removeBook(${i})"><div>Remove</div>
                              </button>`;

            if (myLibrary[i].read) {
                readBtn.innerHTML = `<button class="read-btn" onclick="toggleRead(${i})">
                                    <div>Read</div>
                                    </button>`;
            } else {
                readBtn.innerHTML = 
                            `<button class="not-read-btn" onclick="toggleRead(${i})">
                                    <div>Not Read</div>
                            </button>`;
            }

    const libItem = document.createElement('div');
    libItem.classList.add('lib-row');
    libItem.innerHTML =
        `<div>${myLibrary[i].title}</div>
        <div>${myLibrary[i].author}</div>
        <div>${myLibrary[i].pages}</div>`;
    libItem.append(readBtn.cloneNode(true));
    libItem.append(removeBtn.cloneNode(true));
    displayLib.append(libItem);
  }
}

displayLibrary()


//Helper functions

function toggleRead(i) {
    if (myLibrary[i].read) {
            myLibrary[i].read = false;
    } else {
            myLibrary[i].read = true;
    }
    displayLibrary();
}

function removeBook(i) {
    myLibrary.splice(i, 1);
    displayLibrary();
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
}

function showModal() {
    formModal.classList.remove('hide');
    formModal.classList.add('show');
}

function hideModal() {
    formModal.classList.remove('show');
    formModal.classList.add('hide');
}

