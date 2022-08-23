
import { useRef } from 'react'

function NaInput() {
	const titleInputRef = useRef()
	const descriptionInputRef = useRef()

	function goTo(event) {
		event.preventDefault()

		const enteredTitle = titleInputRef.current.value
		const enteredDescription = descriptionInputRef.current.value

		const goData = { title: enteredTitle, description: enteredDescription }

		console.log(goData)
	}
	return (
	<form onSubmit={goTo}>
<div>
    <label htmlFor="title">title</label>
<input type="text" required id='title' ref={titleInputRef} />
</div>
<div>
    <label htmlFor="description">description</label>
<input type="text" required id='description' ref={descriptionInputRef} />
</div>
<button>hej</button>
    </form>
	)
}

export default NaInput
