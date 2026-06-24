# language: es
Característica: Ganar partida

  Escenario: Los intentos se ignoran después de ganar
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "G"
    Y el jugador adivina la letra "A"
    Y el jugador adivina la letra "T"
    Y el jugador adivina la letra "O"
    Y el jugador adivina la letra "X"
    Entonces se ven 6 vidas
    Y se ve la palabra "G A T O"
