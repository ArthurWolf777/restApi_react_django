import { useEffect, useState } from "react";
import { getAllTask } from "../api/task.api";
import { TaskCard } from "./TaskCard";


export function TaskList(){

const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        async function loadTasks() {
            const respuesta = await getAllTask();
            setTasks(respuesta.data);
        };
        loadTasks();
    }, []);

    return <div className="grid grid-cols-1 gap-4" >
                {tasks.map(task => (
                <TaskCard key={ task.id } task={ task } />
                ))}
        </div>;
}