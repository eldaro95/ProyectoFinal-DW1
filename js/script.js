document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.generarBtn');
    
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const producto = this.closest('.producto');
            const contenedorOrden = producto.querySelector('.numeroOrden');
            
            // Genera un número de orden único (ej: ORD-1234)
            const numeroOrden = 'ORD-' + Math.floor(Math.random() * 9000 + 1000);
            
            // Muestra solo en el contenedor del producto actual
            contenedorOrden.innerHTML = `<strong>${numeroOrden}</strong>`;
        });
    });
});