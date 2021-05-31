import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Col from "./components/layout/Col";
import Container from "./components/layout/Container";
import Row from "./components/layout/Row";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { iTask } from "./types/tasks";

function App(): JSX.Element {
  const [tasks, setTasks] = useState<iTask[]>([]);

  const addTask = (task: iTask): void => {
    setTasks([...tasks, task]);
  };

  const editTask = (id: string, name: string): void => {
    const indexTask: number = tasks.findIndex((task) => task.id === id);

    const editedTask = {
      ...tasks[indexTask],
      name,
    };
    tasks[indexTask] = editedTask;

    setTasks([...tasks]);
  };

  const changeTaskStatus = (id: string): void => {
    const tasksAfterDelete = tasks.map((task: iTask) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return { ...task };
    });

    setTasks(tasksAfterDelete);
  };

  return (
    <Container>
      <Row justify="center">
        <Header title="Tareitas handler 🔥" />
      </Row>
      <Row justify="center" align="center" height={50}>
        <Col width={6} style={{ textAlign: "center" }}>
          <TaskForm addTask={addTask} />
        </Col>
        <Col width={6}>
          <TaskList
            editTask={editTask}
            changeTaskStatus={changeTaskStatus}
            tasks={tasks}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
