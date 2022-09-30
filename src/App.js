import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem("tasks") || "[]")
	);

	const handleAdd = (name) => {
		setTasks((prev) => [
			{ name, completed: false, id: Math.random().toString() },
			...prev,
		]);
	};

	const handleCheck = (event) => {
		setTasks((prev) =>
			prev.map((task) => {
				if (task.id === event.target.id) {
					task.completed = event.target.checked;
				}
				return task;
			})
		);
	};

	const handleDelete = (id) => {
		setTasks((prev) => prev.filter((task) => task.id !== id));
	};

	const taskList = tasks.sort((a, b) => a.completed - b.completed);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	return (
		<Container className="mt-4">
			<h2>Todo app</h2>
			<AddTodo onAdd={handleAdd} />
			<TodoList
				tasks={taskList}
				onChange={handleCheck}
				onDelete={handleDelete}
			/>
		</Container>
	);
}

export default App;
