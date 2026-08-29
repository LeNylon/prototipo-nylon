"use client";

import { useState } from "react";
import Temporizador from "./components/temporizador";
import Musica from "./components/musica";

export default function Home() {
  const [tiempoEstudio, setTiempoEstudio] = useState("");
  const [tiempoDescanso, setTiempoDescanso] = useState("");
  const [iniciado, setIniciado] = useState(false);
  const reproductorMusica = <Musica opcionMusica="/music/musica.mp3" />;
  return (
    <div className="pagina">

      {!iniciado ? (
        <div>
          <label>
            Tiempo de estudio:
            <input
              type="number"
              value={tiempoEstudio}
              onChange={(e) => setTiempoEstudio(e.target.value)}
            />
          </label>

          <br />

          <label>
            Tiempo de descanso:
            <input
              type="number"
              value={tiempoDescanso}
              onChange={(e) => setTiempoDescanso(e.target.value)}
            />
          </label>

          <br />

          <button
            onClick={() => setIniciado(true)}
            disabled={tiempoEstudio <= 0 || tiempoDescanso <= 0}
          >
            Iniciar
          </button>

        </div>
      ) : (
        <Temporizador
          tiempoEstudio={Number(tiempoEstudio)}
          tiempoDescanso={Number(tiempoDescanso)}
          onCambiarTiempos={() => setIniciado(false)}
          musica={reproductorMusica}
        />
      )}

      <Musica opcionMusica="/musica.mp3" />

    </div>
  );
}