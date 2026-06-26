# language: es
Característica: Soporte de acentos y ñ

  Escenario: El jugador ingresa letras con o sin acento y la letra Ñ
    Dado una partida con la palabra "ÁRBOL"
    Cuando el jugador adivina la letra "A"
    Entonces se ve la palabra "Á _ _ _ _"
    Y se ven 6 vidas
    Dado una partida con la palabra "ARBOL"
    Cuando el jugador adivina la letra "Á"
    Entonces se ve la palabra "A _ _ _ _"
    Y se ven 6 vidas
    Dado una partida con la palabra "NIÑO"
    Cuando el jugador adivina la letra "N"
    Entonces se ve la palabra "N _ _ _"
    Y se ven 6 vidas
