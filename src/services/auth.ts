import api, { setAuthToken } from "./api";

export async function fetchToken() {
  const res = await api.get<string>("/implementos/token");
  const token = res.data;

  if (typeof window !== "undefined") {
    localStorage.setItem("gim-token", token);
  }
  setAuthToken(token);

  return token;
}

export function loadTokenFromStorage() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("gim-token");
  }
  setAuthToken(undefined);
}
