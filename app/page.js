import temporizador from "./components/temporizador";

export default function Home() {
  return (
    <div>
      <h1>Mi Pomodoro</h1>
      <temporizador tiempoEstudio={25} tiempoDescanso={5} />
    </div>
  );
}
