# language: es
Característica: Entrada inválida y partida terminada

  Escenario: Tipear un carácter que no es letra no modifica vidas ni palabra
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "3"
    Entonces se ven 6 vidas
    Y se ve la palabra "_ _ _ _"
    Y se ve el error "Caracter invalido"