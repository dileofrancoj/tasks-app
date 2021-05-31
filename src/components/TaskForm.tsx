import React, { useState } from "react";
import shortId from "shortid";

import { iTask } from "../types/tasks";
import { Form, Button, Alert } from "react-bootstrap";
export interface iTaskFormProps {
  addTask: (task: iTask) => void;
}

const TaskForm = ({ addTask }: iTaskFormProps): JSX.Element => {
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const [task] = e.target.elements;

    if (task.value.trim() === "") {
      setError(true);
      return;
    }

    if (error) {
      setError(false);
    }

    const taskObject: iTask = {
      id: shortId.generate(),
      name: task.value.trim(),
      done: false,
    };
    addTask(taskObject);
    e.target.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        size="sm"
        type="text"
        className="input-task"
        placeholder="Tarea"
      />
      <Button size="sm" type="submit" style={{ marginTop: "1em" }}>
        Agregar tarea
      </Button>
      {error && (
        <Alert className="form-alert-error " variant="danger">
          La tarea no puede estar vacía.
        </Alert>
      )}
    </Form>
  );
};

export default React.memo(TaskForm);
