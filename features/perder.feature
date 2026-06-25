# language: es
Característica: Perder partida

  Escenario: El jugador pierde tras 6 fallos
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "X"
    Y el jugador adivina la letra "Y"
    Y el jugador adivina la letra "Z"
    Y el jugador adivina la letra "W"
    Y el jugador adivina la letra "Q"
    Y el jugador adivina la letra "R"
    Entonces se ven 0 vidas
    Y se ve la palabra "G A T O"
    Y se ve el mensaje "PERDISTE"
