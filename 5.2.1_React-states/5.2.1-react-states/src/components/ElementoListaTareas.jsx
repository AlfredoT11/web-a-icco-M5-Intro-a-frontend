const ElementoListaTareas = (props) => {
    return (
        <li>{props.titulo}<button onClick={props.eliminarTareaAccion}>Eliminar tarea</button></li>
    )
}

export default ElementoListaTareas;