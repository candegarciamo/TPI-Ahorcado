# language: es
Característica: Letra repetida

  Escenario: El jugador re-tipea letras ya intentadas
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "A"
    Y el jugador adivina la letra "A"
    Entonces se ve la palabra "_ A _ _"
    Y se ven 6 vidas
    Y se ve el error "Ya intentaste esa letra"
    Cuando el jugador adivina la letra "Z"
    Y el jugador adivina la letra "Z"
    Entonces se ven 5 vidas
    Y se ve la letra errada "Z"
    Y se ve el error "Ya intentaste esa letra"
