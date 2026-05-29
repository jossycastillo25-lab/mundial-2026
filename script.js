// Configura la fecha de la inauguración del Mundial: 11 de Junio de 2026 00:00:00
const fechaMundial = new Date('June 11, 2026 00:00:00').getTime();

// Función que actualiza el contador cada 1 segundo
const contador = setInterval(function() {

    // Obtener la fecha y hora actual exacta
    const ahora = new Date().getTime();
    
    // Calcular la distancia/tiempo restante entre ambas fechas
    const tiempoRestante = fechaMundial - ahora;
    
    // Cálculos matemáticos para transformar los milisegundos a días, horas, minutos y segundos
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
    
    // Insertar los resultados directamente en las etiquetas HTML usando sus IDs
    document.getElementById('days').innerHTML = dias < 10 ? '0' + dias : dias;
    document.getElementById('hours').innerHTML = horas < 10 ? '0' + horas : horas;
    document.getElementById('minutes').innerHTML = minutos < 10 ? '0' + minutos : minutos;
    document.getElementById('seconds').innerHTML = segundos < 10 ? '0' + segundos : segundos;
    
    // Si la fecha ya llegó, detener el contador e imprimir ceros o un mensaje
    if (tiempoRestante < 0) {
        clearInterval(contador);
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
        alert("¡El Mundial 2026 ha comenzado!");
    }

}, 1000); // 1000 milisegundos = 1 segundo