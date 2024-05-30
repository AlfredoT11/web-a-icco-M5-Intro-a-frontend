# Notas de la clase de routing en React

1. En React no vamos a trabajar directamente con la etiqueta <a></a> para movernos entre páginas ya que esto es muy lento, en su lugar vamos a trabajar con ruteo.
2. El ruteo (en React) es una técnica que nos permite simular que nos estamos moviendo entre páginas (así como funciona la etiqueta <a>), sin embargo, lo que en realidad está pasando es que estamos renderizando un componente diferente.
3. La ventaja que tiene esto es que el navegador no desperdicia recursos haciendo una petición al servidor y cargando nuevos archivos, si no que debido a la naturaleza de React, únicamente va a recargar aquellas partes de la página que lo requieran.
4. Para trabajar con rutas vamos a instalar el paquete react-router-dom (npm install react-router-dom).
5. Necesistamos crear una carpeta llamada 'routes' en donde crearemos un index de rutas. 
6. Una ruta es una especificación de una página, lo que significa que tiene un path y una página-componente.
7. También vamos a crear una carpeta llamada 'pages' donde vamos a guardar todos los componentes que servirán como páginas (o como vistas completas de nuestra aplicación).
8. Nota importante, en el RouterIndex, cada elemento <Route> tiene 2 props; uno llamado 'path' y otro llamado 'element'. Para el valor de element se requiere seguir la siguiente nomenclatura: {<NombreComponente />}, de esta manera estamos creando una instanccia del componente y no solamente importamos una función.