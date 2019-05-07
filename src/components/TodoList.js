import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../redux';

export default () => {
	const todos = useSelector((state) => state.todos);
	const toggleTodo = (todoId) => (toggleTodoAction(todoId));
	const deleteTodo = (todoId) => (deleteTodoAction(todoId));
	return (
		<ul className='todo-list'>
			{todos.map((todo) => (
				<li key={todo.id}>
					<input type='checkbox' checked={todo.complete} onChange={toggleTodo.bind(null, todo.Id)} />
					<span className={todo.complete ? 'complete' : null}>{todo.name}</span>
					<span className='delete-button' onClick={deleteTodo.bind(null, todo.id)}>
						X
					</span>
				</li>
			))}
		</ul>
	);
};
