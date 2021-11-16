import { useState } from "react";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";

let nextId = 3;
const initialTodos = [
	{ id: 0, title: "Buy milk", done: true },
	{ id: 1, title: "Eat tacos", done: false },
	{ id: 2, title: "Brew tea", done: false },
];

export default function Todos() {
	const [todos, setTodos] = useState(initialTodos);

	function handleAddTodo(title) {
		setTodos([...todos, { id: nextId++, title: title, done: false }]);
	}

	// function handleChangeTodo(nextTodo) {
	// 	setTodos(
	// 		todos.map((todo) => {
	// 			if (todo.id === nextTodo.id) {
	// 				return { ...todo, title: todo.title };
	// 			} else {
	// 				return todo;
	// 			}
	// 		})
	// 	);
	// }
	function handleChangeTodo(nextTodo) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === nextTodo.id) {
					return nextTodo;
				} else {
					return todo;
				}
			})
		);
	}

	function handleDeleteTodo(todoId) {
		setTodos(todos.filter((todo) => todo.id !== todoId));
	}

	return (
		<>
			<AddTodo onAddTodo={handleAddTodo} />
			<TaskList
				todos={todos}
				onChangeTodo={handleChangeTodo}
				onDeleteTodo={handleDeleteTodo}
			/>
		</>
	);
}
