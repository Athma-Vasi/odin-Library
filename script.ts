const mainApp = function () {
	const log = (i: unknown) => console.log('\n', i)

	type Button = HTMLButtonElement | null
	type Form = HTMLFormElement | null
	type Input = HTMLInputElement | null
	type Image = HTMLImageElement | null
	type Div = HTMLDivElement | null
	type Body = HTMLBodyElement | null

	const bttnAddBook: Button = document.querySelector('.bttn-addBook')
	const formBook: Form = document.querySelector('#bookForm')
	const body: Body = document.querySelector('.body')
	const formContainer: Div = document.querySelector('.form-container')
	const closeIcon: Image = document.querySelector('.icon-close')

	const cardContainer: Div = document.querySelector('.card-container')
	const finishedBttn: Input = document.querySelector('.isFinished')
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

		if (formContainer && body) {
			formContainer.style.display = 'inline-block'
			body.style.background = 'hsla(0,0%,0%,0.3)'
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
	function handleFormSubmit(this: HTMLFormElement, ev: SubmitEvent) {
		ev.preventDefault()

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

		if (formContainer && body) {
			formContainer.style.display = 'none'
			body.style.background = 'var(--clr-light)'
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
		//
		//
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

		const deleteIcon: Image = document.querySelector('.icon-delete')
		const statusChangeIcon: Image = document.querySelector('.icon-statusChange')
		//
		deleteIcon?.addEventListener('click', handleDeleteCard)
		statusChangeIcon?.addEventListener('click', handleStatusChange)
		//
	}
	//

	function handleCloseIcon(this: HTMLImageElement, ev: MouseEvent) {
		if (formContainer && body) {
			formContainer.style.display = 'none'
			body.style.background = 'var(--clr-light)'
		}
	}
	function handleDeleteCard(this: HTMLImageElement, ev: MouseEvent) {
		//use foreach from parent container to add eventlistener to all children to be clicked to removed
	}
	function handleStatusChange(this: HTMLImageElement, ev: MouseEvent) {
		log(this)
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
	bttnAddBook?.addEventListener('click', handleBttnAddBook)
	formBook?.addEventListener('submit', handleFormSubmit)
	closeIcon?.addEventListener('click', handleCloseIcon)
}

document.addEventListener('DOMContentLoaded', mainApp)
