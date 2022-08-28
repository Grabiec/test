import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
function NewAdd(props) {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const titleChange = event => {
		setTitle(event.target.value)
	}
	const descriptionChange = event => {
		setDescription(event.target.value)
	}
	function handleSubmit() {
		const inputData = {
			title: title,
			description: description,
		}
		

	}
	return (
		<form>
			<div>
				<TextField label='title' value={title} onChange={titleChange} />
			</div>
			<div>
				<TextField label='description' value={description} onChange={descriptionChange} />
			</div>
			
		</form>
	)
}

export default NewAdd
