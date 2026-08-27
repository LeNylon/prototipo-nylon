import Temporizador from "./components/temporizador";

export default function Home() {
  return (
    <div className="pagina">
      <Temporizador tiempoEstudio={25} tiempoDescanso={5} />
    </div>
  );
}
