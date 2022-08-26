import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function ImportList(props) {
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
					<Typography>{props.title}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{props.body}</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}

export default ImportList
