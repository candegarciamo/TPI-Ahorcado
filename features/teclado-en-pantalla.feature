# language: es
Característica: Teclado en pantalla
  Como jugador
  Quiero usar un teclado en pantalla
  Para poder jugar desde dispositivos sin teclado físico o usando el mouse

  Escenario: Usar el teclado en pantalla para adivinar letras
    Dado que inicio un nuevo juego con la palabra secreta "HOLA"
    Entonces veo un teclado en pantalla con las letras de la "A" a la "Z", incluyendo la "Ñ"
    Cuando toco la tecla "H" en el teclado en pantalla
    Entonces la palabra enmascarada es "H _ _ _"
    Y la tecla "H" debe estar deshabilitada
