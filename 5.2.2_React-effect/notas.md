# Notas de clase
1. Dentro de React existe un concepto llamado 'hooks'. Los hooks son funciones que existen dentro de la biblioteca que me permiten acceder a funciones especiales de React.
2. El hooks más básico se conoce como state. Este hook nos permite trabajar con variables de estado, que son aquellas variables que, como el nombre, nos permiten conocer y modificar el estado de una instancia de componente, y por lo tanto, modificar la manera en que se ve en pantalla, o sea, el componte se renderiza otra vez.
3. Existe otro hook conocido como 'effect'. Este hook nos permite sincronizar nuestra aplicación de React con un sistema externo. Algunos ejemplos de sistemas externos son:
    - Una petición a una API.
    - Interacción con el sistema operativo (un contador, leer un archivo, escribir sobre un archivo).
    - Interacción con una base de datos.
4. El hook de effect puede depender de variables de dependencia. Estas variables de depencia sirven como disparadores del effect. Si su valor cambia, entonces el hook de effect se mandará a llamar.
5. useEffect() se ejecutara en los siguientes casos:
    1. Cuando el componente se renderiza por primera vez.
    2. Cuando el componente se vuelve a renderizar Y ADEMÁS las variables de dependencia cambian su valor.
6. No se debe confundir effect con un evento. Un evento es una interacción del usuario (presionar un botón, escribir en un formulario, dar click, etc, son aquellos métodos de JS y del DOM que llevan 'on' como onClick, onKeyPressed, etc.) 
