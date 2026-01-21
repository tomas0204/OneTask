import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

function TaskForm({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <InputGroup>
        <Form.Control
          placeholder="Nueva tarea..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="primary" type="submit">
          <FaPlus />
        </Button>
      </InputGroup>
    </Form>
  );
}

export default TaskForm;
