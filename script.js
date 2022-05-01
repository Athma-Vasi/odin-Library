"use strict";
const mainApp = function () {
    const log = (i) => console.log('\n', i);
    const bttnAddBook = document.querySelector('.bttn-addBook');
    const formBook = document.querySelector('#bookForm');
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    function handleBttnAddBook(ev) {
        // if (formContainer) formContainer.style.display = 'block'
        log(this);
        log(ev);
    }
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    function handleFormSubmit(ev) {
        var _a, _b, _c, _d;
        ev.preventDefault();
        const closeIcon = document.querySelector('.icon-close');
        const formData = new FormData(this);
        const formTitle = (_a = formData.get('bookTitle')) === null || _a === void 0 ? void 0 : _a.toString();
        const formAuthor = (_b = formData.get('bookAuthor')) === null || _b === void 0 ? void 0 : _b.toString();
        const formLanguage = (_c = formData.get('bookLanguage')) === null || _c === void 0 ? void 0 : _c.toString();
        const formPages = (_d = formData.get('bookPages')) === null || _d === void 0 ? void 0 : _d.toString();
        const finishedBttn = document.querySelector('.isFinished');
        const progressBttn = document.querySelector('.inProgress');
        //
        //
        const addClassToDiv = createElem('div');
        const addClassToPara = createElem('p');
        const cardBook = addClassToDiv('card-book');
        const cardTitle = addClassToPara('card-title');
        const cardAuthor = addClassToPara('card-author');
        const cardLanguage = addClassToPara('card-language');
        const cardPages = addClassToPara('card-pages');
        const cardStatus = addClassToPara('card-status');
    }
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    function createElem(elemType) {
        return function (className) {
            const elem = document.createElement(elemType);
            elem.classList.add(className);
            return elem;
        };
    }
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    bttnAddBook === null || bttnAddBook === void 0 ? void 0 : bttnAddBook.addEventListener('click', handleBttnAddBook);
    formBook === null || formBook === void 0 ? void 0 : formBook.addEventListener('submit', handleFormSubmit);
};
document.addEventListener('DOMContentLoaded', mainApp);
