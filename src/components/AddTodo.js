import React, { useRef, useState } from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";

const AddTodo = ({ onAdd }) => {
	const [textInput, setTextInput] = useState("");

	const inputRef = useRef();

	const handleChange = (event) => {
		setTextInput(event.target.value?.replace(/^ /g, ""));
	};

	const handleAdd = (event) => {
		event.preventDefault();
		onAdd(textInput);
		setTextInput("");
		inputRef.current.focus();
	};

	return (
		<form onSubmit={handleAdd}>
			<Row className="mt-4">
				<Col xs="9">
					<FormControl
						placeholder="Nhập tên công việc"
						value={textInput}
						autoFocus
						ref={inputRef}
						onChange={handleChange}
					/>
				</Col>
				<Col xs="3">
					<Button
						type="submit"
						className="btn-primary"
						disabled={!textInput}
					>
						Thêm
					</Button>
				</Col>
			</Row>
		</form>
	);
};

export default AddTodo;
