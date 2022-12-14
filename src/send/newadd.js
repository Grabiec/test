import { useState } from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

function NewAdd() {
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
		console.log(inputData)
	}

	return (
		<form>
			<div>
				<TextField label='title' value={title} onChange={titleChange} />
			</div>
			<div>
				<TextField label='description' value={description} onChange={descriptionChange} />
			</div>
			<Button
				variant='contained'
				onClick={() => {
					handleSubmit()
				}}>
				Submit
			</Button>
		</form>
	)
}

export default NewAdd
