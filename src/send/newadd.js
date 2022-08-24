import { useState } from 'react'
import * as React from 'react'
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
		<form onSubmit={handleSubmit}>
			<div>
				<TextField id='outlined-Title' label='title' value={title} onChange={titleChange} />
			</div>
			<div>
				<TextField id='outlined-description' label='description' value={description} onChange={descriptionChange} />
			</div>
			<Button
				variant='contained'
				onClick={() => {
					handleSubmit()
				}}>
				Contained
			</Button>

			<div></div>
		</form>
	)
}

export default NewAdd
