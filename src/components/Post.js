import { styled, darken } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionActions from '@mui/material/AccordionActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'

const Accordion = styled(MuiAccordion, {
	shouldForwardProp: prop => prop !== 'odd',
})(({ odd, theme }) => ({
	backgroundColor: odd ? theme.palette.background.paper : darken(theme.palette.background.paper, 0.3),
}))

function Post({ title, body, odd = false, handleDeletePost, id, handleUpdatePosts }) {
	const [edited, setEdited] = useState(false)

	return (
		<Accordion odd={odd}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				{edited ? <TextField defaultValue={title} /> : <Typography>{title}</Typography>}
			</AccordionSummary>
			<AccordionDetails>
				{edited ? <TextField defaultValue={body} /> : <Typography>{body}</Typography>}
			</AccordionDetails>
			<AccordionActions>
				<Button color='error' onClick={() => handleDeletePost(id)}>
					delete
				</Button>
				<Button onClick={() => setEdited(true)}>edit</Button>
			</AccordionActions>
		</Accordion>
	)
}

export default Post
