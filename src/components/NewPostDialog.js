import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'

const defaultValues = {
	title: '',
	description: '',
}

function NewPostDialog({ handleAddPosts }) {
	const [open, setOpen] = useState(false)
	const [formData, setFormData] = useState(defaultValues)

	const handleOpenDialog = () => {
		setOpen(true)
	}

	const handleCloseDialog = () => {
		setOpen(false)
	}

	const handleChange = event => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	function handleSubmit() {
		handleAddPosts(formData)
		handleCloseDialog()
		setFormData(defaultValues)
	}

	return (
		<div>
			<Button variant='outlined' onClick={handleOpenDialog} startIcon={<AddIcon />}>
				New Post
			</Button>
			<Dialog open={open} onClose={handleCloseDialog}>
				<DialogTitle>Add a new post</DialogTitle>
				<DialogContent>
					<TextField name='title' label='title' value={formData.title} onChange={handleChange} />
					<TextField name='description' label='description' value={formData.description} onChange={handleChange} />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Cancel</Button>
					<Button onClick={handleSubmit}>submit</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default NewPostDialog
