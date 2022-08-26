import { useState, useEffect } from 'react'
import ImportListGo from './importListGo'

function List() {
	let [loadedMeetups, setLoadedMeetups] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				return response.json()
			})
			.then(data => {
				setLoadedMeetups(data)
			})
	}, [])

	return (
		<div>
			<ImportListGo items={loadedMeetups} />
		</div>
	)
}

export default List
