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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        ev.preventDefault();
        const closeIcon = document.querySelector('.icon-close');
        const finishedBttn = document.querySelector('.isFinished');
        // const progressBttn: Input = document.querySelector('.inProgress')
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
    }
    function createCard(..._formData) {
        const cardContainer = document.querySelector('.card-container');
        const addClassToDiv = createElem('div');
        const addClassToPara = createElem('p');
        const addClassToDelIcon = createImage('./icons/delete-circle.png');
        const addClassToCheckIcon = createImage('./icons/check-circle.png');
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
        cardLanguage.textContent = _formData[2];
        bookContainer.appendChild(cardPages);
        cardPages.textContent = _formData[3];
        bookContainer.appendChild(cardStatus);
        cardStatus.textContent = _formData[4];
        bookContainer.appendChild(cardReview);
        cardReview.textContent = _formData[5];
        bookContainer.appendChild(iconContainer);
        iconContainer.appendChild(cardDelete);
        iconContainer.appendChild(cardStatusChange);
        // const addTextTobookContainer = appendOffspring(cardContainer, bookContainer)
        // const addTextToCardTitle = appendOffspring(bookContainer, cardTitle)
        // const addTextToCardAuthor = appendOffspring(bookContainer, cardAuthor)
        // const addTextToCardLanguage = appendOffspring(bookContainer, cardLanguage)
        // const addTextToCardPages = appendOffspring(bookContainer, cardPages)
        // const addTextToCardStatus = appendOffspring(bookContainer, cardStatus)
        // const addTextToCardReview = appendOffspring(bookContainer, cardReview)
        // addTextToCardTitle(_formData[0])
        // addTextToCardAuthor(_formData[1])
        // addTextToCardLanguage(_formData[2])
        // addTextToCardPages(_formData[3])
        // addTextToCardStatus(_formData[4])
        // addTextToCardReview(_formData[5])
        log(_formData);
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
    function createImage(source) {
        return function (className) {
            const img = new Image();
            img.src = source;
            img.classList.add(className);
            return img;
        };
    }
    // function appendOffspring(
    // 	parentElem: HTMLElement | null,
    // 	childElem: HTMLElement | null
    // ) {
    // 	return function (_textContent: string) {
    // 		const text = document.createTextNode(_textContent)
    // 		if (childElem) {
    // 			parentElem?.appendChild(childElem)
    // 			childElem.appendChild(text)
    // 		}
    // 		return childElem
    // 	}
    // }
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
