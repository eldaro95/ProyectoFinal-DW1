document.addEventListener('DOMContentLoaded', function() {
    // Espera a que toda la página cargue antes de ejecutar el código.

    const formulario = document.getElementById('form-reserva');
    // Guarda en 'formulario' el formulario de reservas.

    const confirmarBtn = document.querySelector('.confirmar-reserva');
    // Guarda en 'confirmarBtn' el botón para confirmar la reserva.

    const mensajeReserva = document.getElementById('mensaje-reserva');
    // Guarda en 'mensajeReserva' el espacio donde saldrá el mensaje de respuesta.

    formulario.addEventListener('submit', function(event) {
        // Cuando se intente enviar el formulario...

        event.preventDefault();
        // Evita que la página se recargue, así manejamos todo desde aquí.

        const nombre = document.getElementById('nombre').value.trim(); 
        // Guarda lo que escribió el usuario en "nombre", quitando espacios sobrantes.
        const cedula = document.getElementById('cedula').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const pc = document.getElementById('pc').value;
        // Guarda la opción seleccionada en el campo "pc".

        if (nombre === '' || cedula === '' || correo === '' || pc === '') {
            // Si algún campo está vacío...

            mensajeReserva.textContent = 'Por favor, completa todos los campos antes de reservar. 📝';
            // Muestra un mensaje pidiendo que complete todo.

            mensajeReserva.style.color = 'red';
            // Muestra el mensaje en rojo para que se note.

            return;
            // Detiene todo, no continúa con la reserva.
        }

        // Si todo está completo...

        mensajeReserva.textContent = '¡Reserva confirmada con éxito! 🎉';
        // Muestra un mensaje alegre de que todo salió bien.

        mensajeReserva.style.color = 'green';
        // El mensaje se pone verde para dar buena señal.

        confirmarBtn.textContent = 'Reservado ✅';
        // Cambia el texto del botón para mostrar que ya se reservó.

        confirmarBtn.disabled = true;
        // Desactiva el botón para que no se pueda volver a enviar.

        confirmarBtn.style.backgroundColor = '#28a745';
        // Cambia el color del botón a verde.

        confirmarBtn.style.color = 'white';
        // Pone el texto del botón en blanco para que se vea mejor.

        confirmarBtn.style.border = 'none';
        // Le quita el borde al botón para que se vea más limpio.

        console.log('Formulario válido, se podría enviar:', { nombre, cedula, correo, pc });
        // Para el desarrollador: aquí se podrían enviar los datos al servidor.
    });

    $(document).ready(function () {
        $(".btn-reservar").on("click", function (event) {
            event.preventDefault(); // Previene el salto directo
            $("html, body").animate({
                scrollTop: $("#reserva").offset().top
            }, 800); // Duración: 800ms
        });
    });
    
});