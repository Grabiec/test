import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useRef } from 'react'
import Stack from '@mui/material/Stack'

import SendIcon from '@mui/icons-material/Send'

function NewAdd() {
	const titleInputRef = useRef()
	const descriptionInputRef = useRef()

	function goTo(event) {
		event.preventDefault.useState()

		const enteredTitle = titleInputRef.current.value
		const enteredDescription = descriptionInputRef.current.value

		const goData = { title: enteredTitle, description: enteredDescription }

		console.log(goData)
	}
	return (
		<div >
			<Stack
				component='form'
				sx={{
					width: '25ch',
				}}
				spacing={2}
				noValidate
				autoComplete='off'>
				<TextField
					hiddenLabel
					id='filled-hidden-label-small'
					variant='filled'
					size='title'
					ref={titleInputRef}
					onSubmit={goTo}
				/>
				<TextField
					hiddenLabel
					id='filled-hidden-label-normal'
					variant='filled'
					ref={descriptionInputRef}
					onSubmit={goTo}
				/>
			</Stack>
			<Button variant='contained' endIcon={<SendIcon />}>
				Send
			</Button>
		</div>
	)
}

export default NewAdd
