# ATs mínimos
## AT 1 - Iniciar Partida
  ### UTs:
  1. Al inicializar un juego, las vidas iniciales deben ser 6.
  2. Al inicializar un juego con la palabra "GATO", la palabra enmascarada devuelta debe ser "_ _ _ _".
  3. Al inicializar un juego con una palabra de distinta longitud (ej. "ALA"), la palabra enmascarada debe tener la longitud correcta ("_ _ _").
  4. El juego debe guardar el estado inicial (sin letras adivinadas aún).

## AT 2 - Adivinar Letra Correcta
  ### UTs:
  1. Adivinar una letra presente revela **todas** sus ocurrencias ("ALA" + `A` → `A _ A`).
  2. Es case-insensitive (`a` == `A`).
  3. La palabra enmascarada se representa bien (guiones para lo oculto).
  4. La letra acertada **no** descuenta vidas.

## AT 3 - Fallar Letra
  UTs:
  1. Adivinar una letra ausente en la palabra descuenta 1 vida (ej. de 6 pasa a 5).
  2. La palabra enmascarada no se modifica tras un fallo.
  3. El fallo es case-insensitive (intentar `x` o `X` es el mismo fallo).
  4. Lista la letra errada.
  5. Solo se puede ingresar una letra.

## AT 4 - Ganar (Completa todas las letras → ve mensaje "GANASTE")
  ### UTs:
  1. Adivinar la última letra faltante cambia el estado del juego a "GANADO" (o equivalente).
  2. Al ganar el juego, se debe mostrar o devolver el mensaje "GANASTE".
  3. Al completarse la palabra, la versión enmascarada debe coincidir con la palabra original (no quedan guiones).
  4. Una vez que el juego está ganado, cualquier intento adicional de adivinar letras debe ser ignorado.

## AT 5 - Perder (6 fallos → ve "PERDISTE" y la palabra revelada)
  ### UTs:
  1. Al fallar 6 veces, el estado del juego cambia a "PERDIDO".
  2. Al perder, el método mensaje() devuelve "PERDISTE".
  3. Al perder, la palabra revelada debe mostrarse completa (sin guiones).
  4. Una vez que el juego está perdido, cualquier intento adicional de adivinar letras debe ser ignorado (no descuenta más vidas).
  5. Al perder, las vidas deben ser exactamente 0.

## AT 6 - Letra repetida (Re-tipea una letra ya intentada → no penaliza e informa)
  ### UTs:
  1. Al reintentar una letra ya acertada, no se deben modificar las vidas.
  2. Al reintentar una letra ya acertada, no debe cambiar la palabra enmascarada.
  3. Al reintentar una letra ya fallada, no se deben modificar las letras adivinadas.
  4. Al reintentar una letra ya fallada, no la agrega dos veces a la lista de letras erradas.
  5. Al reintentar una letra ya usada, se debe mostrar un mensaje de error (ej: "Ya intentaste esa letra").

## AT 7 - Entrada inválida (Tipea algo que no es letra, o juega con la partida terminada)
  ### UTs:
  1. Al intentar ingresar algo que no es una letra, no se deben modificar las vidas.
  2. Al intentar ingresar algo que no es una letra, la palabra enmascarada debe permanecer igual.
  3. Al intentar ingresar algo que no es una letra, la letra ingresada debe ser ignorada.
  4. Al intentar ingresar algo que no es una letra, no se deben modificar las letras adivinadas.
  5. Al intentar ingresar algo que no es una letra, se debe mostrar un mensaje de error

# ATs para Aprobacion Directa
## AT 8 - Soporte de acentos y ñ
  ### UTs:
  1. Adivinar una letra sin acento ("A") acierta la letra con acento ("Á") en la palabra secreta.
  2. Adivinar una letra con acento ("Á") acierta la letra sin acento ("A") en la palabra secreta.
  3. La palabra enmascarada retiene los acentos originales de la palabra secreta (ej. si la palabra es ÁRBOL y se adivina A, devuelve "Á _ _ _ _").
  4. La letra "Ñ" es independiente de la "N".

## AT 9 - Palabra al azar de una lista (elegir la palabra; **seam** para inyectar el azar y poder testear deterministicamente)
  ### UTs:
  1. Al inicializar un juego, la palabra debe elegirse al azar de una lista predefinida.
  2. Al inicializar un juego, la palabra debe estar en mayúsculas.



## AT 10 - Dibujo progresivo del ahorcado con SVG (qué partes del muñeco se muestran según la cantidad de errores (0→6))
  ### UTs (sobre el dominio — método `partesVisibles()` en `Ahorcado`):
  1. Con 0 errores, `partesVisibles()` devuelve una lista vacía (no se muestra ninguna parte del muñeco).
  2. Con 1 error, `partesVisibles()` devuelve `["soga", "cabeza"]` (la soga aparece junto con la cabeza en el primer error).
  3. Con 2 errores, `partesVisibles()` devuelve `["soga", "cabeza", "cuerpo"]`.
  4. Con 3 errores, `partesVisibles()` devuelve `["soga", "cabeza", "cuerpo", "brazoIzquierdo"]`.
  5. Con 4 errores, `partesVisibles()` devuelve `["soga", "cabeza", "cuerpo", "brazoIzquierdo", "brazoDerecho"]`.
  6. Con 5 errores, `partesVisibles()` devuelve `["soga", "cabeza", "cuerpo", "brazoIzquierdo", "brazoDerecho", "piernaIzquierda"]`.
  7. Con 6 errores (juego perdido), `partesVisibles()` devuelve todas las partes del cuerpo más la cara de muerto: `["soga", "cabeza", "cuerpo", "brazoIzquierdo", "brazoDerecho", "piernaIzquierda", "piernaDerecha", "ojosX", "bocaTriste"]`.
  8. Cada error nuevo agrega exactamente una parte sin modificar las anteriores (las partes son acumulativas).
  9. La base y la horca (poste, travesaño) se muestran siempre, independientemente de los errores (verificable vía AT).
  10. Al perder (6 errores), la cara del muñeco muestra ojos en X y boca con "-" (cara de muerto).


## AT 11 - Jugar de nuevo
  ### UTs:
  1. Al reiniciar el juego, las vidas vuelven a ser 6.
  2. Al reiniciar el juego, las letras adivinadas antes ya no cuentan como adivinadas.
  3. Al reiniciar el juego, la lista de letras erradas queda vacía.
  4. Al reiniciar el juego, el estado del juego deja de ser "GANADO" o "PERDIDO" y vuelve al estado inicial.
  5. Al reiniciar el juego, la palabra enmascarada refleja la nueva palabra (sin letras reveladas).