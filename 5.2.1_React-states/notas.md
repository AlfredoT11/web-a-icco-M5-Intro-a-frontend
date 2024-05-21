1.  React: Es un biblioteca para construir aplicaciones frontend.
2.  En React utilizamos la sintaxis de JSX, una sintaxis especial que nos permite escribir código para la biblioteca. Esta sintaxis es muy simular a combinar HTML + JS. Además, esta sintaxis nos permite "inyectar" código JS en HTML.
3.  Sintaxis básica de React.
    - Componentes basados en clases
        - Estas clases deben heredar de la clase React.Component
        - Estas clases tienen un método llamado render() que es la que le indica a React qué es lo que tiene que verse en pantalla.
    - Componentes basados en funciones
        - Esta es la forma preferida de trabajar con componentes en React.
4. Para trabajar con componentes tenemos que hacer lo siguiente:
    - Crear un archivo con extensión .jsx donde únicamente debe haber un solo componente.
    - Para nombrar un componente utilizamos PascalCase.
    - Dentro de ese archivo debemos exportar el componente. (export default NombreDelComponente;)
    - Cada vez que querramos utilizar el componente, lo debemos importar. (import NombreDelComponente from 'ubicacionDelComponente';)
    - Los componentes pueden recibir props (properties). Estos valores nos permiten modificar la visualización de información de un componente.
    - Los props son muy similares en sintaxis a las propiedades de HTML. Necesitamos acceder a ellos dentro de nuestro componente para poder visualizarlos.
    - Los props NO pueden ser modificados. Únicamente son valores de lectura.
    - Los states SÍ pueden ser modificados, me dicen el estado de un componente.
5. En React existen hooks que son funciones que permiten manipular o acceder a diferentes aspecots de la biblioteca.
