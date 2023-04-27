import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask } from '../api/task.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function TaskFormPage(){

    const { register, handleSubmit, formState: {errors}, setValue } = useForm()

    const navigate = useNavigate();
    const params = useParams();

    console.log(params);

    const onSubmit = handleSubmit(async data =>{
        if (params.id){
            await updateTask(params.id, data);
            toast.success('Tarea Actualizada');
        } else {
            await createTask(data);
            toast.success('Tarea Creada');
        }
        navigate('/tasks');
    })

    useEffect(() => {
        async function loadDataTask(){
            if(params.id) {
                console.log('obteniendo datos');
                const response = await getTask(params.id)
                console.log(response)
                setValue('title', response.data.title)
                setValue('description', response.data.description)
            }
        } 
        loadDataTask();
    }, [])

    return (
        <div className='max-w-xl mx-auto' >
            <form onSubmit={ onSubmit } >
                
                { params.id ? <h3>Actualizar Tarea</h3> : <h3>Nueva Tarea</h3> }

                <input type="Text" placeholder="Titulo"
                { ...register("title", { required: true }) }
                    className='bg-zinc-700 p-3 rounded-lg block w-full mt-5 mb-3'
                />
                { errors.title && <span> Este campo es requerido </span> }

                <textarea rows="3" placeholder="Descripción" 
                { ...register("description", { required: true }) }
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'>
                </textarea>
                { errors.description && <span> Este campo es requerido </span> }

                <button className='bg-indigo-500 p-3 rounded-lg block w-full mb-3' > { params.id ? 'Actualizar' : 'Crear' } </button>
            </form>
            { params.id && <button onClick={async () => {
                const confirmDelete = window.confirm('¿Estas seguro de eliminar esta tarea?')
                if(confirmDelete){
                    await deleteTask(params.id);
                    toast.success('Tarea Eliminada');
                    navigate('/tasks');
                }
            }}
                className='bg-red-500 p-3 rounded-lg w-full'
            >Borrar</button> }
        </div>
    )
}