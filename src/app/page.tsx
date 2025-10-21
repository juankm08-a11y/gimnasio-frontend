import Bienvenida from "../components/Bienvenida";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <Bienvenida nombre="Juan" />
      <section className="mt-6">
        <p className="text-gray-600">
          Aqui encuentras nuestros implementos, podrás registrarte en nuestro y
          ver la seccion de los mejores entrenadores
        </p>
      </section>
    </main>
  );
}
