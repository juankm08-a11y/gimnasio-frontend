import Link from "next/link";

// Creamos nuestro componente NavBar
export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex gap-6">
      <Link href="/">Inicio</Link>
      <Link href="/implementos">Implementos</Link>
      <Link href="/entrenadores">Entrenadores</Link>
      <Link href="/usuarios">Usuarios</Link>
    </nav>
  );
}
