import React, { useEffect, useState } from 'react';

const List = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const Limit = 20;

  const fetchTodos = async () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default List;
