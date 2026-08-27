"use client";

import { useState, useEffect } from "react";

export default function Temporizador({ tiempoEstudio, tiempoDescanso }) {

    const [segundos, setSegundos] = useState(tiempoEstudio * 60);
    const [activo, setActivo] = useState(false);
    const [descanso, setDescanso] = useState(false);

    useEffect(() => {
        if (!activo) return;

        const intervalo = setInterval(() => {
            setSegundos(s => {
                if (s <= 1) {
                    if (descanso) {
                        setDescanso(false);
                        return tiempoEstudio * 60;
                    } else {
                        setDescanso(true);
                        return tiempoDescanso * 60;
                    }
                }

                return s - 1;
            });
        }, 1000);

        return () => clearInterval(intervalo);
    }, [activo, descanso, tiempoEstudio, tiempoDescanso]);

    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    return (
        <div className="temporizador">
            <h2>
                {descanso ? "Descanso" : "Estudio"}
            </h2>

            <h1>
                {String(minutos).padStart(2, "0")}:
                {String(segundosRestantes).padStart(2, "0")}
            </h1>
            <div className="botones">
                <button onClick={() => setActivo(!activo)}>
                    {activo ? "Pausar" : "Iniciar"}
                </button>

                <button onClick={() => {
                    setActivo(false);
                    setDescanso(false);
                    setSegundos(tiempoEstudio * 60);
                }}>
                    Reiniciar
                </button>
            </div>
        </div>
    );

}
