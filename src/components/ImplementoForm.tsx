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
      <input placeholder="Nombre" className="border px-2 py-1" />
      <input placeholder="Tipo" className="border px-2 py-1" />
      <input placeholder="Estado" className="border px-2 py-1" />
      <button
        className="bg-blue-600 text-white px-3 py-1 rounded"
        type="submit"
      ></button>
    </form>
  );
}
