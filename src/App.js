import React, { useState } from 'react';
import './App.css';
import Form from './Form';

export default () => {
	const [ todos, setTodos ] = useState([]);

	const toggleComplete = (i) =>
		setTodos(
			todos.map(
				(todo, k) =>
					k === i
						? {
								...todo,
								complete: !todo.complete
							}
						: todo
			)
		);

	return (
		<div className='App'>
			<div>
				<Form onSubmit={(text) => setTodos([ { text, complete: false }, ...todos ])} />
			</div>
			<div>
				{todos.map(({ text, complete }, i) => (
					<div
						key={text}
						onClick={() => toggleComplete(i)}
						style={{ textDecoration: complete ? 'line-through' : '' }}
					>
						{text}
					</div>
				))}
			</div>
			<button onClick={() => setTodos([])}>reset </button>
		</div>
	);
};
