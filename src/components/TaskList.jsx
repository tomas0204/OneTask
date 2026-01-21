import { ListGroup, Button } from "react-bootstrap";
import { FaTrash, FaCheck } from "react-icons/fa";

function TaskList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p className="text-muted text-center">No hay tareas</p>;
  }

  return (
    <ListGroup>
      {tasks.map(task => (
        <ListGroup.Item
          key={task.id}
          className="d-flex justify-content-between align-items-center"
        >
          <span
            onClick={() => toggleTask(task.id)}
            style={{
              cursor: "pointer",
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.completed && <FaCheck className="text-success me-2" />}
            {task.text}
          </span>

          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => deleteTask(task.id)}
          >
            <FaTrash />
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TaskList;
