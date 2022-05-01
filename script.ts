const mainApp = function () {
	const log = (i: unknown) => console.log('\n', i)

	type Button = HTMLButtonElement | null
	type Form = HTMLFormElement | null
	type Input = HTMLInputElement | null
	type Image = HTMLImageElement | null

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

		const closeIcon = document.querySelector('.icon-close')

		const formData = new FormData(this)
		const formTitle = formData.get('bookTitle')?.toString()
		const formAuthor = formData.get('bookAuthor')?.toString()
		const formLanguage = formData.get('bookLanguage')?.toString()
		const formPages = formData.get('bookPages')?.toString()

		const finishedBttn: Input = document.querySelector('.isFinished')
		const progressBttn: Input = document.querySelector('.inProgress')
		//
		//
		const addClassToDiv = createElem('div')
		const addClassToPara = createElem('p')

		const cardBook = addClassToDiv('card-book')
		const cardTitle = addClassToPara('card-title')
		const cardAuthor = addClassToPara('card-author')
		const cardLanguage = addClassToPara('card-language')
		const cardPages = addClassToPara('card-pages')
		const cardStatus = addClassToPara('card-status')
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
