let cronometroInterval;
  let segundos = 0, minutos = 0, horas = 0;

  function iniciarCronometro() {
    cronometroInterval = setInterval(() => {
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
          minutos = 0;
          horas++;
        }
      }

      actualizarCronometro();
    }, 1000);
  }

  function pausarCronometro() {
    clearInterval(cronometroInterval);
  }

  function resetearCronometro() {
    segundos = 0;
    minutos = 0;
    horas = 0;
    actualizarCronometro();
  }

  function actualizarCronometro() {
    const cronometroElemento = document.getElementById('cronometro');
    cronometroElemento.textContent = `${formatoDosDigitos(horas)}:${formatoDosDigitos(minutos)}:${formatoDosDigitos(segundos)}`;
  }

  function formatoDosDigitos(valor) {
    return valor.toString().padStart(2, '0');
  }