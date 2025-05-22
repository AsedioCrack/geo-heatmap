// Captura ubicación
navigator.geolocation.getCurrentPosition(async (position) => {
  const { latitude, longitude } = position.coords;

  // Enviar datos a Firebase
  await fetch("https://tu-backend-endpoint.firebaseapp.com/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lat: latitude, lng: longitude, timestamp: Date.now() }),
  });
}, (err) => {
  console.error("Error obteniendo ubicación:", err);
});
