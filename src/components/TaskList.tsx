import styled from "styled-components";

import { iTask, iTasks } from "../types/tasks";

interface iSpan {
  done: boolean | false;
}

const Span = styled.span`
  display: block;
  margin-bottom: 1em;
  ${(props: iSpan) =>
    props.done ? "text-decoration: line-through;" : "text-decoration:none;"};
`;

const TaskList = ({ tasks, deleteTask }: iTasks): JSX.Element => {
  return (
    <>
      <h2>Listado de tareas</h2>
      {tasks.length > 0 &&
        tasks.map(({ id, name, done }: iTask) => (
          <>
            <Span done={done} key={id}>
              <input type="checkbox" onChange={() => deleteTask(id)} /> {name}
            </Span>
          </>
        ))}
    </>
  );
};

export default TaskList;
