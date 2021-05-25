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

  const deleteTask = (id: string): void => {
    const tasksAfterDelete = tasks.map((task: iTask) => {
      if (task.id === id) {
        console.log("In");
        return {
          ...task,
          done: true,
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
          <TaskList deleteTask={deleteTask} tasks={tasks} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
