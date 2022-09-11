import Post from './Post'

function PostList({ items, handleDeletePost,handleUpdatePosts }) {
	return (
		<div>
			{items.map((item, index) => (
				<Post
					id={item.id}
					key={item.id}
					title={item.title}
					body={item.body}
					odd={index % 2 === 0}
					handleDeletePost={handleDeletePost}
          handleUpdatePosts={handleUpdatePosts}
				/>
			))}
		</div>
	)
}
export default PostList
