export interface iTask {
  id: string;
  name: string;
  done: boolean | false;
}

export interface iTaskActions {
  editTask: (id: string, name: string) => void;
  changeTaskStatus: (id: string) => void;
}
