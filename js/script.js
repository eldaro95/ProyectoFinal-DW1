// Espera a que todo el contenido del DOM (html) esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {

    // Selecciona todos los elementos con la clase 'generarBtn' (botones para generar números)
    const botones = document.querySelectorAll('.generarBtn');
    
    // Recorre cada uno de los botones encontrados
    botones.forEach(boton => {

        // Agrega un evento al hacer clic en cada botón
        boton.addEventListener('click', function() {

            // Encuentra el contenedor padre con la clase 'producto' más cercano al botón clicado
            const producto = this.closest('.producto');

            // Dentro de ese producto, busca el contenedor donde se mostrará el número de orden
            const contenedorOrden = producto.querySelector('.numeroOrden');
            
            // Genera un número de orden aleatorio entre 1000 y 9999, con prefijo 'ORD-'
            const numeroOrden = 'ORD-' + Math.floor(Math.random() * 9000 + 1000);
            
            // Inserta el número de orden en el contenedor correspondiente del producto actual
            contenedorOrden.innerHTML = `<strong>${numeroOrden}</strong>`;
        });
    });
});