import { Link } from "react-router-dom"

export function Navigation(){
    return (
        <div className="flex justify-between py-3" >
            <Link to='/'>
                <h1 className="font-bold text-3xl mb-4" >API DE TAREAS</h1>    
            </Link>
            <Link className="bg-indigo-500 p-3  rounded-lg hover:bg-indigo-800" to='/task-create' > Crear Tarea </Link>
        </div>

    )
}