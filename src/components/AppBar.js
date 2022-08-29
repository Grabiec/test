import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import NewPostDialog from './NewPostDialog'

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
})

function SendOnData(formData) {
	fetch('https://godata-7c092-default-rtdb.europe-west1.firebasedatabase.app/.json', {
		method: 'POST',
		body: JSON.stringify(formData),
		headers: {
			Data: 'application/json',
		},
	})
}

function AppBar() {
	return (
		<MuiAppBar position='sticky' color='default'>
			<StyledToolbar>
				<Typography variant='h4'>My Blog</Typography>
				{/* TODO pass setData function here */}
				<NewPostDialog onSend={SendOnData} />
			</StyledToolbar>
		</MuiAppBar>
	)
}
export default AppBar
