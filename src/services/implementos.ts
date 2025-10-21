import api from "./api";
import { Implemento } from "../types/Implementos";

export async function getImplementos(): Promise<Implemento[]> {
  const res = await api.get<Implemento[]>("/implementos");
  return res.data;
}

export async function createImplemento(
  payload: Implemento
): Promise<Implemento> {
  const res = await api.post<Implemento>("/implementos", payload);
  return res.data;
}

export async function updateImplemento(
  id: number,
  payload: Implemento
): Promise<Implemento> {
  const res = await api.put<Implemento>(`/implementos/${id}`, payload);
  return res.data;
}

export async function deleteImplemento(id: number): Promise<void> {
  await api.delete(`/implementos/${id}`);
}
