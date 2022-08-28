import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
// import NewAdd from '../send/newadd'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
function AlertDialog(inputData) {
	const [open, setOpen] = useState(false)
	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}
	


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
		<div>
			<Button variant='outlined' onClick={handleClickOpen}>
				Add data to ??
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogContent>
                <TextField label='title' value={title} onChange={titleChange} />
                <TextField label='description' value={description} onChange={descriptionChange} />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleSubmit}>submit</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default AlertDialog
