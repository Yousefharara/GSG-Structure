
export const COLUMNS_POST = (handleEdit, handleDelete) => [
  {
    key: "id",
    title: "ID",
    // render: (data) => <>{data.id}</>,
  },
  {
    key: "title",
    title: "Title",
    // render: (data) => <>{data.id}</>,
  },
  {
    key: "body",
    title: "Body",
    // render: (data) => <>{data.id}</>,
  },
  {
    key: "action",
    title: "Action",
    render: (data) => (
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={() => handleDelete(data.id)}>Delete</button>
        <button onClick={() => handleEdit(data.id)}>Edit</button>
      </div>
    ),
  },
];
