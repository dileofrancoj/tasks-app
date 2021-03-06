import { useState } from "react";
import styled from "styled-components";
import { Modal, Button, Form } from "react-bootstrap";

import { iTask, iTaskActions } from "../types/tasks";

export interface iTaskProps {
  task: iTask;
  actions: iTaskActions;
}

interface iSpan {
  done: boolean | false;
}

const Span = styled.span`
  display: block;
  margin-bottom: 1em;
  ${(props: iSpan) =>
    props.done ? "text-decoration: line-through;" : "text-decoration:none;"};
`;

const ButtonContainer = styled.div`
  margin: 1em;
  text-align: center;
`;

const Task = ({ task, actions }: iTaskProps): JSX.Element => {
  const { done, id, name } = task;
  const { editTask, changeTaskStatus } = actions;

  const [modal, setModal] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(name);

  const handleChangeEdit = (e: any) => {
    setTaskToEdit(e.target.value);
  };
  return (
    <>
      <Span done={done} key={id}>
        <input type="checkbox" onChange={() => changeTaskStatus(id)} /> {name}
        <span className="edit__task" onClick={() => setModal(!modal)}>
          ✏️
        </span>
      </Span>
      <Modal show={modal} backdrop="static">
        <Modal.Header>
          <Modal.Title>Editar tarea: {id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            size="sm"
            type="text"
            className="input-task"
            placeholder="Tarea"
            value={taskToEdit}
            onChange={handleChangeEdit}
          />
          <ButtonContainer>
            <Button size="sm" onClick={() => editTask(id, taskToEdit)}>
              Editar tarea
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setModal(false)}
            >
              Close
            </Button>
          </ButtonContainer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Task;
