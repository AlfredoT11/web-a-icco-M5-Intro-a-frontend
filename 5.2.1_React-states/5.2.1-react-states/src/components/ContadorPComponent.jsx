import { useState } from "react";

const ContadorPComponent = () => {

    const [contador, setContador] = useState(0);

    setInterval(() => {
        console.log('Ya pasó un segundo');
        setContador(contador + 1);
    }, 1000);

    return <p>Han pasado {contador} segundos</p>
}

export default ContadorPComponent;