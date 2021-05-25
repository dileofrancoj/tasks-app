export interface iTask {
  id: string;
  name: string;
  done: boolean | false;
}

export interface iTasks {
  tasks: iTask[];
  deleteTask: (id: string) => void;
}

export interface iTaskForm {
  addTask(task: iTask): void;
}
