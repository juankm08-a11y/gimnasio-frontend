// Creamos nuestro componente formularioEntrenador
import React, { useEffect, useState } from "react";

// Creamos nuestro componente formularioUsuario
export default function EntrenadorForm({
  onSave,
  editing = null,
  onCancel,
}: any) {
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");

  useEffect(() => {
    if (editing) {
      setNombre(editing.nombre);
      setEspecialidad(editing.especialidad);
    } else {
      setNombre("");
      setEspecialidad("");
    }
  }, [editing]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave({ nombre, especialidad });
  };

  return (
    <form onSubmit={submit} className="flex gap-2 items-center flex-wrap">
      <input
        placeholder="Nombre"
        className="border px-2 py-1"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        placeholder="Especialidad"
        className="border px-2 py-1"
        value={especialidad}
        onChange={(e) => setEspecialidad(e.target.value)}
        required
      />
      <button
        className="bg-green-600 text-white px-3 py-1 rounded"
        type="submit"
      >
        {editing ? "Actualizar" : "Crear"}
      </button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      )}
    </form>
  );
}
