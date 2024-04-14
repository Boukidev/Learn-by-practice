export interface Task {
    title: string;
    description: string;
    completed: boolean;
    dateCreation: string;
}

export interface AddTaskInput {
    title: string;
    description: string;
}
