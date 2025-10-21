// Importamos axios
import axios from "axios";

// Creamos una instancia conectada al endpoint del backend Spring Boot Java
const api = axios.create({
  baseURL: "http://localhost:90/api", // Llamamos a nuestro endpoint
  headers: {
    "Content-Type": "application/json", // Creamos los headers
  },
});

// Creamos una funcion que protege nuestros endpoints con JsonWebToken JWT
export function setAuthToken(token?: string | null) {
  // Creamos un condicional si ahi token podrá hacer peticiones CRUD
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    // Si no encuentra token, lo eliminamos
    delete api.defaults.headers.common["Authorization"];
  }
}

// Exportamos la instancia de nuestra api configurada
export default api;
