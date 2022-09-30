import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks = [], onChange, onDelete }) => {
	return (
		<div className="mt-4">
			{tasks.map((task) => (
				<TodoItem
					task={task}
					key={task.id}
					onChange={onChange}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
};

export default TodoList;
