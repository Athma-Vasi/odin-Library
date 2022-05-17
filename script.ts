const mainApp = function () {
	type Button = HTMLButtonElement | null
	type Form = HTMLFormElement | null
	type Input = HTMLInputElement | null
	type Image = HTMLImageElement | null
	type Div = HTMLDivElement | null
	type Body = HTMLBodyElement | null
	type DivNodes = NodeListOf<HTMLDivElement> | null

	const bttnAddBook: Button = document.querySelector('.bttn-addBook')
	const formBook: Form = document.querySelector('#bookForm')
	const body: Body = document.querySelector('.body')
	const formContainer: Div = document.querySelector('.form-container')
	const closeIcon: Image = document.querySelector('.icon-close')
	const cardContainer: Div = document.querySelector('.card-container')
	const finishedBttn: Input = document.querySelector('.isFinished')

	function handleBttnAddBook(this: HTMLButtonElement) {
		const bookCards: DivNodes = document.querySelectorAll('.card-book')
		const iconChange: Image = document.querySelector('.icon-statusChange')
		const iconDelete: Image = document.querySelector('.icon-delete')

		if (formContainer && body && bookCards) {
			formContainer.style.visibility = 'visible'
			body.style.background = 'hsl(0,0%,0%,0.4)'
			bookCards.forEach((card) => (card.style.background = 'hsl(0,0%,0%,0.05)'))
			if (iconChange) iconChange.style.background = 'hsl(0,0%,0%,0.2)'
			if (iconDelete) iconDelete.style.background = 'hsl(0,0%,0%,0.2)'
		}
	}

	function handleFormSubmit(this: HTMLFormElement, ev: SubmitEvent) {
		ev.preventDefault()

		const formData = new FormData(this)
		const formTitle = formData.get('bookTitle')?.toString() ?? ''
		const formAuthor = formData.get('bookAuthor')?.toString() ?? ''
		const formLanguage = formData.get('bookLanguage')?.toString() ?? ''
		const formPages = formData.get('bookPages')?.toString() ?? ''
		const formReview = formData.get('review')?.toString() ?? ''
		const formFinished = finishedBttn?.checked ? 'Finished' : 'Reading' ?? ''

		createCard(formTitle, formAuthor, formLanguage, formPages, formFinished, formReview)

		if (formContainer && body) {
			formContainer.style.visibility = 'hidden'
			body.style.background = 'var(--clr-lighter)'
		}
	}

	function createCard(..._formData: string[]) {
		const addClassToDiv = createElem('div')
		const addClassToPara = createElem('p')
		const addClassToDelIcon = createImage('./icons/delete-circle-outline.png')
		const addClassToCheckIcon = createImage('./icons/check-circle-outline.png')

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

		cardContainer?.appendChild(bookContainer)

		bookContainer.appendChild(cardTitle)
		cardTitle.textContent = _formData[0]

		bookContainer.appendChild(cardAuthor)
		cardAuthor.textContent = `by ${_formData[1]}`

		bookContainer.appendChild(cardLanguage)
		cardLanguage.textContent = `Language: ${_formData[2]}`

		bookContainer.appendChild(cardPages)
		cardPages.textContent = `Pages: ${_formData[3]}`

		bookContainer.appendChild(cardStatus)
		cardStatus.textContent = `Status: ${_formData[4]}`

		bookContainer.appendChild(cardReview)
		cardReview.textContent = _formData[5]

		bookContainer.appendChild(iconContainer)
		iconContainer.appendChild(cardDelete)
		iconContainer.appendChild(cardStatusChange)

		cardDelete.addEventListener('click', handleDeleteIcon)
		cardStatusChange.addEventListener('click', handleStatusChange)
	}

	function handleCloseIcon(this: HTMLImageElement) {
		if (formContainer && body) {
			formContainer.style.visibility = 'hidden'
			body.style.background = 'var(--clr-lighter)'
		}
	}

	function handleDeleteIcon(this: HTMLImageElement) {
		const iconContainer1 = this.parentElement as Div
		const cardBook1 = iconContainer1?.parentElement as Div

		if (cardBook1) cardBook1.style.display = 'none'
	}
	function handleStatusChange(this: HTMLImageElement) {
		const iconContainer2 = this.parentElement as Div
		const cardStatus2 = iconContainer2?.previousSibling?.previousSibling

		if (cardStatus2)
			cardStatus2.textContent =
				cardStatus2.textContent === 'Status: Reading'
					? 'Status: Finished'
					: 'Status: Reading'
	}

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

	bttnAddBook?.addEventListener('click', handleBttnAddBook)
	formBook?.addEventListener('submit', handleFormSubmit)
	closeIcon?.addEventListener('click', handleCloseIcon)
}

document.addEventListener('DOMContentLoaded', mainApp)
