import React from "react";

// Creamos nuestro componente de mensaje de bienvenida
export default function Bienvenida({
  nombre = "Usuario",
}: {
  nombre?: string;
}) {
  return (
    <main className="flex flex-col justify-center items-center p-4 bg-amber-200">
      <h1 className="text-2xl font-semibold mb-1">!Bienvenido, {nombre}</h1>
      <p className="text-blue-500">GymCode in Next.js + Backend en Java</p>
    </main>
  );
}
