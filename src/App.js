import Container from '@mui/material/Container'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles'
import PostList from './components/PostList'
import AppBar from './components/AppBar'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
const theme = createTheme({
	palette: {
		mode: 'dark',
	},
})

const AppContainer = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
}))

const ContentContainer = styled(Container)(({ theme }) => ({
	paddingTop: theme.spacing(2),
	paddingBottom: theme.spacing(2),
}))

function App() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				return response.json()
			})
			.then(data => {
				setPosts(data)
			})
	}, [])

	function handleAddPosts(data) {
		const newPost = {
			id: uuidv4(),
			userId: 1,
			title: data.title,
			body: data.description,
		}
		setPosts(oldPosts => {
			return [newPost, ...oldPosts]
		})
	}

	function handleDeletePost(id) {
		const newPosts = posts.filter(post => post.id !== id)
		setPosts(newPosts)
	}

	function handleUpdatePosts(id, data) {
		const newPosts = posts.map(post => {
			if (post.id === id) {
				return {
					...post,
					...data,
				}
			}
			return post
		})
		setPosts(newPosts)
	}
	return (
		<ThemeProvider theme={theme}>
			<AppContainer>
				<AppBar handleAddPosts={handleAddPosts} />
				<ContentContainer>
					<PostList items={posts} handleDeletePost={handleDeletePost} handleUpdatePosts={handleUpdatePosts} />
				</ContentContainer>
			</AppContainer>
		</ThemeProvider>
	)
}

export default App
