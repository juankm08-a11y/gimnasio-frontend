import React, { useEffect, useState } from "react";

// Creamos nuestro componente formularioUsuario
export default function UsuarioForm({ onSave, editing = null, onCancel }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("");

  useEffect(() => {
    if (editing) {
      setName(editing.nombre);
      setEmail(editing.especialidad);
      setRol(editing.rol);
    } else {
      setName("");
      setEmail("");
      setRol("");
    }
  }, [editing]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave({ name, email, rol });
  };

  return (
    <form onSubmit={submit} className="flex gap-2 items-center flex-wrap">
      <input
        placeholder="Nombre"
        className="border px-2 py-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder="Correo"
        className="border px-2 py-1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="Rol"
        className="border px-2 py-1"
        value={rol}
        onChange={(e) => setRol(e.target.value)}
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
