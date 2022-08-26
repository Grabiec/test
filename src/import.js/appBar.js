import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'



export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 3 }}>
			<AppBar position='static'>
				<Typography variant='h1' sx={{ flexGrow: 1 }}>
					My Blog
				</Typography>
			</AppBar>
		</Box>
	)
}
