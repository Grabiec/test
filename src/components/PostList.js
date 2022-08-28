import ImportList from "./Post";

function PostList({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <ImportList
          key={item.id}
          title={item.title}
          body={item.body}
          odd={index % 2 === 0}
        />
      ))}
    </div>
  );
}
export default PostList;
