import { iTask } from "../types/tasks";
import Task from "./Task";

export interface iTaskListProps {
  tasks: iTask[];
  changeTaskStatus: (id: string) => void;
  editTask: (id: string, name: string) => void;
}

const TaskList = ({
  tasks,
  changeTaskStatus,
  editTask,
}: iTaskListProps): JSX.Element => {
  return (
    <>
      <h2>Listado de tareas</h2>
      {tasks.length > 0 &&
        tasks.map((task: iTask) => (
          <Task
            key={task.id}
            task={task}
            editTask={editTask}
            changeTaskStatus={changeTaskStatus}
          />
        ))}
    </>
  );
};

export default TaskList;
