import { DataType } from './App.tsx';
import { TaskType } from "./App.tsx";

type TaskListPropsType = {
    data: DataType;
};

export const TaskList = (props: TaskListPropsType) => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <ul>
                {props.data.tasks.map((el: TaskType) => (
                    <li key={el.taskId}>
                        <span>{el.taskId}</span>
                        <span>{el.title}</span>
                        <span>{el.isDone}</span>
                    </li>
                ))}
            </ul>

            <ul>
                {props.data.students.map((el: string) => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
        </div>
    );
};