import { iTask, iTaskActions } from "../types/tasks";
import Task from "./Task";

export interface iTaskListProps {
  tasks: iTask[];
  actions: iTaskActions;
}

const TaskList = ({ tasks, actions }: iTaskListProps): JSX.Element => {
  return (
    <>
      <h2>Listado de tareas</h2>
      {tasks.length > 0 &&
        tasks.map((task: iTask) => (
          <Task key={task.id} task={task} actions={actions} />
        ))}
    </>
  );
};

export default TaskList;
