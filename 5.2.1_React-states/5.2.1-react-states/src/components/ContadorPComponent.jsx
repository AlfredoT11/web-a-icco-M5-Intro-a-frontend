import { useEffect, useState } from "react";

const ContadorPComponent = () => {

    // El hook useState() me permite generar estados para un componente.
    const [contador, setContador] = useState(0);

    // El hook useEffect() le permite a mi aplicación sincronizarse con un sistema externo.
    // Aprenderemos de él la próxima clase.
    useEffect(() => {
        setInterval(() => {
            console.log('Ya pasó un segundo');
            setContador(contador + 1);
        }, 1000);
    });

    return <p>Han pasado {contador} segundos</p>
}

export default ContadorPComponent;