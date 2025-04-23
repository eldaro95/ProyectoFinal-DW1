// script.js

let lat;
let lng;
let marker; // Variable para guardar la referencia del marcador

async function initMap() {
  
  // Posición inicial
  const position = { lat: -0.1928601, lng: -78.4969704 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "DEMO_MAP_ID", // Map ID is required for advanced markers.
  });

  // Crear marcador inicial (opcional)
  marker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: position,
    title: 'Ubicación seleccionada',
  });

  map.addListener("click", function(event) {
    lat = event.latLng.lat();
    lng = event.latLng.lng();
    
    // Actualizar los campos del formulario
    document.getElementById("lat").value = lat;
    document.getElementById("lng").value = lng;
    document.getElementById("direccion").value = `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`;
    
    // Actualizar la posición del marcador o crear uno nuevo si no existe
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

function obtenerCitas() {
  const citas = localStorage.getItem("citas");
  return citas ? JSON.parse(citas) : [];
}

function guardarCita(cita) {
  const citas = obtenerCitas();
  const yaExiste = citas.some(c => c.fecha === cita.fecha && c.hora === cita.hora);
  if (yaExiste) {
    alert("Ese horario ya está reservado. Por favor, elige otro.");
    return false;
  }
  citas.push(cita);
  localStorage.setItem("citas", JSON.stringify(citas));
  return true;
}

function generarTicketID() {
  return "TICKET-" + Math.floor(100000 + Math.random() * 900000);
}

function crearArchivoTxt(cita, ticketId) {
  const contenido = `Número de Ticket: ${ticketId}
Producto: ${cita.producto}
Problema: ${cita.problema}
Fecha: ${cita.fecha}
Hora: ${cita.hora}
Dirección: ${cita.direccion}
Ubicación: ${cita.lat}, ${cita.lng}`;
  const blob = new Blob([contenido], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${ticketId}.txt`;
  link.click();
}

function mostrarMensajeExito(ticketId) {
  let mensaje = document.getElementById("mensaje-exito");
  if (!mensaje) {
    mensaje = document.createElement("div");
    mensaje.id = "mensaje-exito";
    mensaje.style.marginTop = "20px";
    mensaje.style.padding = "10px";
    mensaje.style.backgroundColor = "#d4edda";
    mensaje.style.color = "#155724";
    mensaje.style.border = "1px solid #c3e6cb";
    mensaje.style.borderRadius = "5px";
    document.querySelector("main").appendChild(mensaje);
  }
  mensaje.innerHTML = `✅ Cita registrada con éxito. <br><strong>Número de ticket:</strong> ${ticketId}`;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".cita-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const cita = {
      producto: document.getElementById("producto").value.trim(),
      problema: document.getElementById("problema").value.trim(),
      fecha: document.getElementById("fecha").value,
      hora: document.getElementById("hora").value,
      direccion: document.getElementById("direccion").value.trim(),
      lat: document.getElementById("lat").value,
      lng: document.getElementById("lng").value,
    };

    if (!cita.producto || !cita.problema || !cita.fecha || !cita.hora || !cita.lat || !cita.lng) {
      alert("Por favor completa todos los campos y selecciona una ubicación en el mapa.");
      return;
    }

    const ok = guardarCita(cita);
    if (ok) {
      const ticketId = generarTicketID();
      mostrarMensajeExito(ticketId);
      crearArchivoTxt(cita, ticketId);
    }
  });
});
