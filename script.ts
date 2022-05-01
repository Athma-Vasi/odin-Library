const mainApp = function () {
	const log = (i: unknown) => console.log('\n', i)

	type Button = HTMLButtonElement | null
	type Form = HTMLFormElement | null
	type Input = HTMLInputElement | null
	type Image = HTMLImageElement | null
	type Div = HTMLDivElement | null

	const bttnAddBook: Button = document.querySelector('.bttn-addBook')
	const formBook: Form = document.querySelector('#bookForm')
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
	function handleBttnAddBook(this: HTMLButtonElement, ev: MouseEvent) {
		// if (formContainer) formContainer.style.display = 'block'
		log(this)
		log(ev)
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
	function handleFormSubmit(this: HTMLFormElement, ev: SubmitEvent) {
		ev.preventDefault()

		const closeIcon: Image = document.querySelector('.icon-close')
		const finishedBttn: Input = document.querySelector('.isFinished')
		// const progressBttn: Input = document.querySelector('.inProgress')

		const formData = new FormData(this)
		const formTitle = formData.get('bookTitle')?.toString() ?? ''
		const formAuthor = formData.get('bookAuthor')?.toString() ?? ''
		const formLanguage = formData.get('bookLanguage')?.toString() ?? ''
		const formPages = formData.get('bookPages')?.toString() ?? ''
		const formReview = formData.get('review')?.toString() ?? ''
		const formFinished = finishedBttn?.checked ? 'Finished' : 'Reading' ?? ''

		//
		//
		createCard(formTitle, formAuthor, formLanguage, formPages, formFinished, formReview)
	}

	function createCard(..._formData: string[]) {
		const cardContainer: Div = document.querySelector('.card-container')

		const addClassToDiv = createElem('div')
		const addClassToPara = createElem('p')
		const addClassToDelIcon = createImage('./icons/delete-circle.png')
		const addClassToCheckIcon = createImage('./icons/check-circle.png')

		const bookContainer = addClassToDiv('card-book')
		const iconContainer = addClassToDiv('icon-card-container')

		const cardTitle = addClassToPara('card-title')
		const cardAuthor = addClassToPara('card-author')
		const cardLanguage = addClassToPara('card-language')
		const cardPages = addClassToPara('card-pages')
		const cardStatus = addClassToPara('card-status')
		const cardReview = addClassToPara('card-review')
		const cardDelete = addClassToDelIcon('icon-delete')
		const cardStatusChange = addClassToCheckIcon('icon-statusChange')
		//
		//
		cardContainer?.appendChild(bookContainer)

		bookContainer.appendChild(cardTitle)
		cardTitle.textContent = _formData[0]

		bookContainer.appendChild(cardAuthor)
		cardAuthor.textContent = `by ${_formData[1]}`

		bookContainer.appendChild(cardLanguage)
		cardLanguage.textContent = _formData[2]

		bookContainer.appendChild(cardPages)
		cardPages.textContent = _formData[3]

		bookContainer.appendChild(cardStatus)
		cardStatus.textContent = _formData[4]

		bookContainer.appendChild(cardReview)
		cardReview.textContent = _formData[5]

		bookContainer.appendChild(iconContainer)
		iconContainer.appendChild(cardDelete)
		iconContainer.appendChild(cardStatusChange)

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

		log(_formData)
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

	function createElem(elemType: string) {
		return function (className: string) {
			const elem = document.createElement(elemType)
			elem.classList.add(className)
			return elem
		}
	}

	function createImage(source: string) {
		return function (className: string) {
			const img = new Image()
			img.src = source
			img.classList.add(className)
			return img
		}
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
	bttnAddBook?.addEventListener('click', handleBttnAddBook)
	formBook?.addEventListener('submit', handleFormSubmit)
}

document.addEventListener('DOMContentLoaded', mainApp)
