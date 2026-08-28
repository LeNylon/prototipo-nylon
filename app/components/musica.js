"use client";

import { useRef, useState } from "react";

export default function Musica({opcionMusica}) {
    const audio = useRef(null);
    const [reproduciendo, setReproduciendo] = useState(false);

    const cambiarMusica = () => {
        if (!audio.current || audio.current.src !== opcionMusica) {
            audio.current = new Audio(opcionMusica);
            audio.current.loop = true;
        }

        if (reproduciendo) {
            audio.current.pause();
        } else {
            audio.current.play();
        }

        setReproduciendo(!reproduciendo);
    };

    return (
        <button onClick={cambiarMusica}>
            {reproduciendo ? "Pausar música" : "Poner música"}
        </button>
    );
}