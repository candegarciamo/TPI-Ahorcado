# language: es
Característica: Jugar de nuevo

  Escenario: Reiniciar el juego tras jugar una partida
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "X"
    Y el jugador adivina la letra "Y"
    Y el jugador adivina la letra "Z"
    Y el jugador adivina la letra "W"
    Y el jugador adivina la letra "Q"
    Y el jugador adivina la letra "R"
    Entonces se ve el mensaje "PERDISTE"
    Cuando el jugador reinicia el juego
    Entonces se ven 6 vidas
    Y no se ve la letra errada "X"
    Y se ve el mensaje ""
    Y el dibujo del ahorcado muestra 0 partes
