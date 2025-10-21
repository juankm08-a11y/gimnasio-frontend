import api from "./api";
import { Entrenador } from "../types/Entrenador";

// Creamos nuestro CRUDEntrenadores
export async function getEntrenadores(): Promise<Entrenador[]> {
  const res = await api.get<Entrenador[]>("/entrenadores");
  return res.data;
}

export async function createEntrenador(
  payload: Entrenador
): Promise<Entrenador> {
  const res = await api.post<Entrenador>("/entrenadores", payload);
  return res.data;
}

export async function updateEntrenador(
  id: number,
  payload: Entrenador
): Promise<Entrenador> {
  const res = await api.put<Entrenador>(`/entrenadores/${id}`, payload);
  return res.data;
}

export async function deleteEntrenador(id: number): Promise<void> {
  const res = await api.delete(`/entrenadores/${id}`);
  return res.data;
}
