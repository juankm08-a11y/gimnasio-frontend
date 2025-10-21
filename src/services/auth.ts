// Importamos nuestra y nuestra funcion setAuthToken
import api, { setAuthToken } from "./api";

// Creamos una funcion fetch que tra ese token desde el backend
export async function fetchToken() {
  const res = await api.get<string>("/implementos/token"); // este endpoint recibe el token
  // Creamos la variable token que almacenara el token llamando a la variable res
  const token = res.data;

  // Guardamos el token en el navegador con localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem("gim-token", token);
  }

  // Aplicamos nuestro token en axios
  setAuthToken(token);
  return token;
}

// Cargamos el token desde el localStorage si ya existe
export function loadTokenFromStorage() {
  if (typeof window !== "undefined") return null;
  const t = localStorage.getItem("gim-item");
  if (t) setAuthToken(t);
  return t;
}

// Limpiamos el token
export function clearToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("gim-token");
  }
  setAuthToken(undefined);
}
