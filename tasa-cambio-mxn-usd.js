
// Script externo para obtener tipo de cambio MXN a USD
// Puedes alojarlo en GitHub, Netlify o cualquier servidor que permita archivos JS
// Llama a esta función desde tu formulario en Blogger para obtener el valor automáticamente

async function obtenerTasaMXNaUSD() {
  try {
    const respuesta = await fetch("https://open.er-api.com/v6/latest/MXN");
    const datos = await respuesta.json();
    const tasa = datos.rates.USD;
    return tasa;
  } catch (error) {
    console.error("Error al obtener tipo de cambio:", error);
    return 18.5; // Valor por defecto en caso de error
  }
}
