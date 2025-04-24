// Esperamos a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Obtenemos los elementos del menú por su ID para poder trabajar con ellos
    const menuItems = {
        home: document.getElementById('home'), // Enlace que lleva al inicio
        evento: document.getElementById('evento'), // Enlace que lleva a la sección de eventos
        catalogo: document.getElementById('catalogo'), // Enlace que lleva al catálogo
        servicio: document.getElementById('servicio-tecnico') // Enlace al servicio técnico
    };

    // Cuando el usuario hace clic en "Inicio", se hace scroll hacia arriba (al principio de la página)
    menuItems.home.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que el enlace se comporte como un link normal
        window.scrollTo({
            top: 0, // Va al tope de la página
            behavior: 'smooth' // El desplazamiento se hace suavemente
        });
    });

    // Al hacer clic en "Evento", se hace scroll hacia la sección que tiene la clase 'contenedor2'
    menuItems.evento.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.contenedor2')?.scrollIntoView({ behavior: 'smooth' }); // Va a la sección suavemente
    });

    // Cuando se da clic en "Catálogo", se hace scroll a la sección con clase 'contenedor1'
    menuItems.catalogo.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.contenedor1')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Lo mismo pasa con "Servicio Técnico", también lo lleva a 'contenedor1' (aunque podría cambiarse si hay otra sección)
    menuItems.servicio.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.contenedor1')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Nota: el signo de interrogación (?.) es por si el elemento no existe, así evita errores
    // Más adelante se pueden agregar funciones más complejas si se conecta con un backend
});
