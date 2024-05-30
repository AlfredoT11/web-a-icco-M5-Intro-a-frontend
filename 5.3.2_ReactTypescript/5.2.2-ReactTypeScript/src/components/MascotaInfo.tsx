// Destructuración con objetos literales
/*
const mascota = {
    nombre: 'Boggie',
    edad: 5,
    genero: 'M'
};

let nombre = mascota.nombre;
let edad = mascota.edad;
let genero = mascota.genero;

const {nombre, edad, genero} = mascota;
*/

interface MascotaInfoProps{
    nombre: string; 
    edad: number; 
    estaEsterilizado: boolean; 
    sobrenombres: string[];
}

const MascotaInfo = ({nombre, edad, estaEsterilizado, sobrenombres}: MascotaInfoProps) => {
    
    const estaEsterilizadoCheck = (): string => {
        if(estaEsterilizado){
            return 'Sí está esterilizado';
        }else{
            return 'No está esterilizado';
        }
    }
    
    return (
        <>
        <h1>Nombre: {nombre}</h1>
        <h2>Edad: {edad}</h2>
        <h2>{estaEsterilizadoCheck()}</h2>
        <h2>Sobrenombres: </h2>
        <ul>
            {sobrenombres.map((sobrenombre: string) => <li>{sobrenombre}</li>)}
        </ul>
        </>
    )
}

export default MascotaInfo;