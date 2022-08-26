import { useState, useEffect } from 'react'
import ButtonAppBar from './appBar'
import ImportListGo from './importListGo'

function List(props) {
	
	let [loadedMeetups, setLoadedMeetups] = useState([])
	useEffect(() => {
        
		fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json()
        })
			.then(data => {
				setLoadedMeetups(data)
			})
	}, [])
	

	return (
		<div>
            <ButtonAppBar/>
			<ImportListGo items={loadedMeetups} />
		</div>
	)
}

export default List
