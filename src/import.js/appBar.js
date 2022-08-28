import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AlertDialog from '../btndialog/btnidalog'

function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 4 }}>
            
			<AppBar position='static' color='default'>
				<Typography variant='h1'>
					My Blog
				</Typography>
					<AlertDialog />
			</AppBar >
		</Box>
	)
}
export default ButtonAppBar
