import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'



function ImportList({title,body}) {
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>{title}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{body}</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}

export default ImportList
