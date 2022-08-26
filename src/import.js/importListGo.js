import ImportList from "./importlist"

function ImportListGo({items}) {
	return (
		<div>
			{items.map(item => (
				<ImportList key={item.id} title={item.title} body={item.body} />
			))}
		</div>
	)
}
export default ImportListGo
