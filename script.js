"use strict";
const mainApp = function () {
    const log = (i) => console.log('\n', i);
    const bttnAddBook = document.querySelector('.bttn-addBook');
    const formBook = document.querySelector('#bookForm');
    const body = document.querySelector('.body');
    const formContainer = document.querySelector('.form-container');
    const closeIcon = document.querySelector('.icon-close');
    const cardContainer = document.querySelector('.card-container');
    const finishedBttn = document.querySelector('.isFinished');
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
        if (formContainer && body) {
            formContainer.style.display = 'inline-block';
            body.style.background = 'hsla(0,0%,0%,0.3)';
        }
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        ev.preventDefault();
        const formData = new FormData(this);
        const formTitle = (_b = (_a = formData.get('bookTitle')) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
        const formAuthor = (_d = (_c = formData.get('bookAuthor')) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '';
        const formLanguage = (_f = (_e = formData.get('bookLanguage')) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : '';
        const formPages = (_h = (_g = formData.get('bookPages')) === null || _g === void 0 ? void 0 : _g.toString()) !== null && _h !== void 0 ? _h : '';
        const formReview = (_k = (_j = formData.get('review')) === null || _j === void 0 ? void 0 : _j.toString()) !== null && _k !== void 0 ? _k : '';
        const formFinished = (finishedBttn === null || finishedBttn === void 0 ? void 0 : finishedBttn.checked) ? 'Finished' : 'Reading' !== null && 'Reading' !== void 0 ? 'Reading' : '';
        //
        //
        createCard(formTitle, formAuthor, formLanguage, formPages, formFinished, formReview);
        if (formContainer && body) {
            formContainer.style.display = 'none';
            body.style.background = 'var(--clr-light)';
        }
    }
    function createCard(..._formData) {
        const addClassToDiv = createElem('div');
        const addClassToPara = createElem('p');
        const addClassToDelIcon = createImage('./icons/delete-circle-outline.png');
        const addClassToCheckIcon = createImage('./icons/check-circle-outline.png');
        const bookContainer = addClassToDiv('card-book');
        const iconContainer = addClassToDiv('icon-card-container');
        const cardTitle = addClassToPara('card-title');
        const cardAuthor = addClassToPara('card-author');
        const cardLanguage = addClassToPara('card-language');
        const cardPages = addClassToPara('card-pages');
        const cardStatus = addClassToPara('card-status');
        const cardReview = addClassToPara('card-review');
        const cardDelete = addClassToDelIcon('icon-delete');
        const cardStatusChange = addClassToCheckIcon('icon-statusChange');
        //
        //
        cardContainer === null || cardContainer === void 0 ? void 0 : cardContainer.appendChild(bookContainer);
        bookContainer.appendChild(cardTitle);
        cardTitle.textContent = _formData[0];
        bookContainer.appendChild(cardAuthor);
        cardAuthor.textContent = `by ${_formData[1]}`;
        bookContainer.appendChild(cardLanguage);
        cardLanguage.textContent = `Language: ${_formData[2]}`;
        bookContainer.appendChild(cardPages);
        cardPages.textContent = `Pages: ${_formData[3]}`;
        bookContainer.appendChild(cardStatus);
        cardStatus.textContent = `Status: ${_formData[4]}`;
        bookContainer.appendChild(cardReview);
        cardReview.textContent = _formData[5];
        bookContainer.appendChild(iconContainer);
        iconContainer.appendChild(cardDelete);
        iconContainer.appendChild(cardStatusChange);
        const deleteIcon = document.querySelector('.icon-delete');
        const statusChangeIcon = document.querySelector('.icon-statusChange');
        //
        deleteIcon === null || deleteIcon === void 0 ? void 0 : deleteIcon.addEventListener('click', handleDeleteCard);
        statusChangeIcon === null || statusChangeIcon === void 0 ? void 0 : statusChangeIcon.addEventListener('click', handleStatusChange);
        //
    }
    //
    function handleCloseIcon(ev) {
        if (formContainer && body) {
            formContainer.style.display = 'none';
            body.style.background = 'var(--clr-light)';
        }
    }
    function handleDeleteCard(ev) {
        //use foreach from parent container to add eventlistener to all children to be clicked to removed
    }
    function handleStatusChange(ev) {
        log(this);
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
    function createElem(elemType) {
        return function (className) {
            const elem = document.createElement(elemType);
            elem.classList.add(className);
            return elem;
        };
    }
    function createImage(source) {
        return function (className) {
            const img = new Image();
            img.src = source;
            img.classList.add(className);
            return img;
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
    //
    bttnAddBook === null || bttnAddBook === void 0 ? void 0 : bttnAddBook.addEventListener('click', handleBttnAddBook);
    formBook === null || formBook === void 0 ? void 0 : formBook.addEventListener('submit', handleFormSubmit);
    closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon.addEventListener('click', handleCloseIcon);
};
document.addEventListener('DOMContentLoaded', mainApp);
