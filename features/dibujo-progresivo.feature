# language: es
Característica: Dibujo progresivo del ahorcado

  Escenario: Al iniciar se ve la base y la horca pero no el muñeco
    Dado una partida con la palabra "GATO"
    Entonces se ve la base de la horca
    Y el dibujo del ahorcado muestra 0 partes

  Escenario: Con el primer fallo aparece la soga y la cabeza
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "X"
    Entonces el dibujo del ahorcado muestra 2 partes
    Y se ve la parte "soga" del muñeco
    Y se ve la parte "cabeza" del muñeco

  Escenario: Con cada fallo aparece una parte nueva del muñeco
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "X"
    Entonces el dibujo del ahorcado muestra 2 partes
    Cuando el jugador adivina la letra "Y"
    Entonces el dibujo del ahorcado muestra 3 partes
    Y se ve la parte "cuerpo" del muñeco
    Cuando el jugador adivina la letra "Z"
    Entonces el dibujo del ahorcado muestra 4 partes
    Y se ve la parte "brazoIzquierdo" del muñeco

  Escenario: Al perder se muestra el muñeco completo con cara de muerto
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "X"
    Y el jugador adivina la letra "Y"
    Y el jugador adivina la letra "Z"
    Y el jugador adivina la letra "W"
    Y el jugador adivina la letra "Q"
    Y el jugador adivina la letra "R"
    Entonces el dibujo del ahorcado muestra 9 partes
    Y se ve la parte "soga" del muñeco
    Y se ve la parte "cabeza" del muñeco
    Y se ve la parte "cuerpo" del muñeco
    Y se ve la parte "brazoIzquierdo" del muñeco
    Y se ve la parte "brazoDerecho" del muñeco
    Y se ve la parte "piernaIzquierda" del muñeco
    Y se ve la parte "piernaDerecha" del muñeco
    Y se ve la parte "ojosX" del muñeco
    Y se ve la parte "bocaTriste" del muñeco
    Y se ve la base de la horca
