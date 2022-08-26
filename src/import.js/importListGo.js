import ImportList from "./importlist"

function ImportListGo(props) {
	return (
		<div>
			{props.items.map(item => (
				<ImportList key={item.id} title={item.title} body={item.body} />
			))}
		</div>
	)
}
export default ImportListGo
