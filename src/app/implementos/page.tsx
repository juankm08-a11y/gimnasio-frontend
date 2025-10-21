"use client";

import ImplementoForm from "@/components/ImplementoForm";
import { fetchToken, loadTokenFromStorage } from "@/services/auth";
import {
  createImplemento,
  deleteImplemento,
  getImplementos,
  updateImplemento,
} from "@/services/implementos";
import { Implemento } from "@/types/Implementos";
import { useEffect, useState } from "react";

export default function ImplementosPage() {
  const [implementos, setImplementos] = useState<Implemento[]>([]);
  const [editing, setEditing] = useState<Implemento | null>(null);

  useEffect(() => {
    async function init() {
      const existing = loadTokenFromStorage();
      if (!existing) await fetchToken();
      await load();
    }
    init();
  }, []);

  async function load() {
    const data = await getImplementos();
    setImplementos(data);
  }

  async function handleSave(payload: Implemento) {
    if (editing?.idImplemento) {
      await updateImplemento(editing.idImplemento, payload);
    } else {
      await createImplemento(payload);
    }
    setEditing(null);
    await load();
  }

  async function handleDelete(id?: number) {
    if (!id || !confirm("¿Eliminar Implemento?")) return;
    await deleteImplemento(id);
    await load();
  }

  return (
    <main className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Implemento</h2>
      <ImplementoForm
        onSave={handleSave}
        editing={editing}
        onCancel={() => setEditing(null)}
      />
      <ul className="mt-4 space-y-2">
        {implementos.map((i) => (
          <li
            key={i.idImplemento}
            className="bg-white p-3 rounded shadow flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{i.nombre}</div>
              <div className="text-sm text-gray-600">
                {i.tipo} - {i.estado}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setEditing(i)}>Editar</button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(i.idImplemento)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
