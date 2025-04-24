document.addEventListener('DOMContentLoaded', () => {
    // Enlaces del menú
    const menuItems = {
        home: document.getElementById('home'),
        evento: document.getElementById('evento'),
        catalogo: document.getElementById('catalogo'),
        servicio: document.getElementById('servicio-tecnico')
    };

    // Escuchadores para hacer scroll o mostrar alertas si no hay destino específico aún
    menuItems.home.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    menuItems.evento.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.contenedor2')?.scrollIntoView({ behavior: 'smooth' });
    });

    menuItems.catalogo.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.contenedor1')?.scrollIntoView({ behavior: 'smooth' });
    });

    menuItems.servicio.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.contenedor1')?.scrollIntoView({ behavior: 'smooth' });
    });

    // También puedes agregar funciones dinámicas más adelante si hay un backend
});