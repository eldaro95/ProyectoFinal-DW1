let lat; // Variable para almacenar la latitud
let lng; // Variable para almacenar la longitud
let marker; // Variable para almacenar el marcador

// Cargar el mapa de Google Maps al cargar la página
async function initMap() {
  // Constante para la ubicacion predeterminada del mapa, ITQ Quito
  const position = { lat: -0.1928601, lng: -78.4969704 };
  // Cargar el script de Google Maps
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14, // Nivel de zoom del mapa
    center: position, // Centro del mapa
    mapId: "DEMO_MAP_ID", // ID del mapa 
  });
  // Crear un marcador en la ubicación predeterminada
  marker = new google.maps.marker.AdvancedMarkerElement({
    map: map, // Mapa donde se mostrará el marcador 
    position: position, // Posición del marcador
    title: 'Ubicación seleccionada', // Título del marcador
  });
  // Crear un evento de clic en el mapa
  map.addListener("click", function(event) {
    // Obtener la latitud y longitud del clic
    lat = event.latLng.lat();
    lng = event.latLng.lng();
    // Actualizar los campos de latitud y longitud en el formulario
    document.getElementById("lat").value = lat;
    document.getElementById("lng").value = lng;
    document.getElementById("direccion").value = `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`;
    // Si el marcador ya existe, actualizar su posición
    if (marker) {
      marker.position = { lat, lng };
    } else {
      marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: { lat, lng },
        title: 'Ubicación seleccionada',
      });
    }
  });
}

// Funcion para generar un numero aleatorio de ticket
function generarTicketID() {
  return "TICKET-" + Math.floor(100000 + Math.random() * 900000);
}

// Manejo del DOM para el formulario de citas y obtener los datos y procesarlos
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".cita-formulario"); // Selecciona el formulario de citas
  const boton = form.querySelector("button[type='submit']"); // Selecciona el botón de enviar del formulario

  form.addEventListener("submit", function (e) { // Agrega un evento de envío al formulario
    e.preventDefault();
    // Obtener los valores de los campos del formulario
    const producto = document.getElementById("producto").value.trim();
    const problema = document.getElementById("problema").value.trim();
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const direccion = document.getElementById("direccion").value.trim();
    const latVal = document.getElementById("lat").value;
    const lngVal = document.getElementById("lng").value;
    // Validar que todos los campos estén completos
    if (!producto || !problema || !fecha || !hora || !direccion || !latVal || !lngVal) {
      alert("Por favor completa todos los campos y selecciona una ubicación en el mapa.");
      return;
    }
    // Crear un objeto con los datos del formulario
    const ticketId = generarTicketID();

    // Eliminar mensaje previo si existe
    let mensaje = document.getElementById("mensaje-exito"); // Selecciona el mensaje de éxito si existe
    if (!mensaje) {
      mensaje = document.createElement("div"); // Crea un nuevo elemento div para el mensaje
      mensaje.id = "mensaje-exito"; // Asigna un ID al mensaje
      mensaje.style.marginTop = "20px"; // Estilo para el margen superior
      mensaje.style.padding = "10px"; // Estilo para el relleno
      mensaje.style.backgroundColor = "#d4edda"; // Color de fondo verde claro
      mensaje.style.color = "#155724"; // Color del texto verde oscuro
      mensaje.style.border = "1px solid #c3e6cb"; // Borde verde claro
      mensaje.style.borderRadius = "5px"; // Bordes redondeados

      // Insertar mensaje justo debajo del botón
      boton.insertAdjacentElement("afterend", mensaje);
    }
    // Mostrar el mensaje de éxito con los datos del ticket
    mensaje.innerHTML = `
      ✅ Cita registrada con éxito.<br>
      <strong>Número de ticket:</strong> ${ticketId}
    `;
  });
});
