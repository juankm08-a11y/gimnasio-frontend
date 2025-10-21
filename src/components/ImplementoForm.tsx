// Creamos nuestro componente formularioImplementos
import React, { useEffect, useState } from "react";
import { Implemento } from "@/types/Implementos";

type Props = {
  onSave: (impl: Implemento) => Promise<void> | void;
  editing?: Implemento | null;
  onCancel?: () => void;
};

export default function ImplementoForm({
  onSave,
  editing = null,
  onCancel,
}: Props) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [estado, setEstado] = useState("");

  useEffect(() => {
    if (editing) {
      setNombre(editing.nombre);
      setTipo(editing.tipo);
      setEstado(editing.estado);
    } else {
      setNombre("");
      setTipo("");
      setEstado("");
    }
  }, [editing]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave({ nombre, tipo, estado });
    setNombre("");
    setTipo("");
    setEstado("");
  };

  return (
    <form onSubmit={submit} className="flex gap-2 items-center flex-wrap">
      <input
        placeholder="Nombre"
        className="border px-2 py-1"
        value={tipo}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        placeholder="Tipo"
        className="border px-2 py-1"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        required
      />
      <input
        placeholder="Estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        className="border px-2 py-1"
        required
      />
      <button
        className="bg-blue-600 text-white px-3 py-1 rounded"
        type="submit"
      >
        {editing ? "Actualizar" : "Crear"}
      </button>
      {onCancel && (
        <button type="button" onClick={onCancel} className="px-3 py-1">
          Cancelar
        </button>
      )}
    </form>
  );
}
