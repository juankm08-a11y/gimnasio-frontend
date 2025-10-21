import api from "./api";
import { Usuario } from "../types/Usuario";

export async function getUsuarios(): Promise<Usuario[]> {
  const res = await api.get<Usuario[]>("/usuarios");
  return res.data;
}

export async function createUsuario(payload: Usuario): Promise<Usuario> {
  const res = await api.post<Usuario>("/usuarios", payload);
  return res.data;
}

export async function updateUsuario(
  id: number,
  payload: Usuario
): Promise<Usuario> {
  const res = await api.put<Usuario>(`/usuarios/${id}`, payload);
  return res.data;
}

export async function deleteUsuario(id: number): Promise<void> {
  const res = await api.delete(`/usuarios/${id}`);
  return res.data;
}
