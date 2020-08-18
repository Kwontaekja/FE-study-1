import React from 'react';

const Table = (props) => {
  const { todoList, removeTodo } = props;
  const rows = todoList.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.category}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <br />
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <br />
    </div>
  );
};

export default Table;
