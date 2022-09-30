import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const TodoItem = ({ task, onChange, onDelete }) => {
	return (
		<Row
			style={{
				padding: "10px 0",
				borderBottom: "1px solid #ddd",
				opacity: task.completed ? 0.5 : 1,
			}}
		>
			<Col xs="9">
				<Form.Check
					label={task.name}
					checked={task.completed}
					id={task.id}
					onChange={onChange}
				/>
			</Col>
			<Col xs="3">
				<Button
					className="btn-danger btn-sm"
					onClick={() => onDelete(task.id)}
				>
					Xóa
				</Button>
			</Col>
		</Row>
	);
};

export default TodoItem;
