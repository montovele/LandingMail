const API_URL = 'https://hencom.com.mx:3010';
export async function apiFetch(endpoint, options = {}) {
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = `${API_URL}${normalizedEndpoint}`;

  // Obtener el token de autenticación guardado
  const token = localStorage.getItem('token'); // o sessionStorage/Pinia
console.log('token',token)
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}), // Adjuntar token si existe
      ...(options.headers || {})
    },
    ...options
  };

  if (config.body && typeof config.body !== 'string') {
    config.body = JSON.stringify(config.body);
  }

 
  const response = await fetch(url, config);
  const contentType = response.headers.get('content-type') || '';
console.log(

    "[FETCH STATUS]",

    response.status

);
  let data = null;

  if (contentType.includes('application/json')) {
    data = await response.json().catch(() => null);
  } else {
    data = await response.text().catch(() => '');
  }

  if (!response.ok) {
    throw new Error(data?.message || 'Error en la petición');
  }

  return data;
}

export default apiFetch;
