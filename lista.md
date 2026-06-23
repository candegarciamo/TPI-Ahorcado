AT - 1 - Iniciar Partida
  UT:
  1 - Al inicializar un juego, las vidas iniciales deben ser 6.
  2 - Al inicializar un juego con la palabra "GATO", la palabra enmascarada devuelta debe ser "_ _ _ _".
  3 - Al inicializar un juego con una palabra de distinta longitud (ej. "ALA"), la palabra enmascarada debe tener la longitud correcta ("_ _ _").
  4 - El juego debe guardar el estado inicial (sin letras adivinadas aún).

AT - 2 - Adivinar Letra Correcta
  UT:
  1 - adivinar una letra presente revela **todas** sus ocurrencias ("ALA" + `A` → `A _ A`)
  2 - es case-insensitive (`a` == `A`)
  3 - la palabra enmascarada se representa bien (guiones para lo oculto)
  4 - la letra acertada **no** descuenta vidas