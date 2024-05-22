import { useState } from "react";
import ElementoListaTareas from "./ElementoListaTareas"

const ListaTareasComponent = () => {

    // const [nombreDeEstado, setNombreDeEstado]
    // El primer valor es nuestro estado y el segundo valor es una función que me permite modificar ese estado.
    const [listaTareas, setListaTareas] = useState(['Tarea lavar platos', 'Tarea lavar ropa', 'Tarea trapear', 'Lavar al perro']);
    const [textoNuevaTarea, setTextoNuevaTarea] = useState('Tarea');

    const agregarTarea = () => {
        setListaTareas([...listaTareas, textoNuevaTarea]);
        setTextoNuevaTarea('');
    }

    const eliminarTarea = (indiceTarea) => {
        // Necesito generar un nuevo arreglo que será el valor de mi estado listaTareas. 
        // Este nuevo arreglo no debe contener el elemento 
        // con el índice indiceTarea.
        //const nuevoArreglo = null;
        //setListaTareas(nuevoArreglo);
        const nuevoArreglo = listaTareas.filter((_, index) => index !== indiceTarea);
        setListaTareas(nuevoArreglo);
        //alert(`Eliminando tarea ${indiceTarea}`);
    }

    return (
        <div>
            <h2>Mis tareas del hogar</h2>
            <label>Tarea nueva: </label>
            <input 
                value={textoNuevaTarea}
                onChange={(event) => {setTextoNuevaTarea(event.target.value)}}
            />
            <button onClick={agregarTarea}>Agregar tarea</button>

            <div>
                <ul>
                    {
                        listaTareas.map((tareaTexto, index) => {
                            return <ElementoListaTareas 
                                titulo={tareaTexto}
                                key={index}
                                eliminarTareaAccion={() => {eliminarTarea(index)}}
                                />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ListaTareasComponent;