import { Ahorcado } from '../src/domain/Ahorcado';

describe('Ahorcado - Iniciar Partida', () => {
  it('Al inicializar un juego, las vidas iniciales deben ser 6', () => {
    const juego = new Ahorcado('GATO');
    // @ts-ignore - Ignoramos el chequeo de tipos para poder correr el test y verlo fallar (ROJO)
    expect(juego.vidas()).toBe(6);
  });

  it('Al inicializar un juego con la palabra "GATO", la palabra enmascarada devuelta debe ser "_ _ _ _"', () => {
    const juego = new Ahorcado('GATO');
    // @ts-ignore - Ignoramos el chequeo para ver el ROJO real por falta del método
    expect(juego.palabraEnmascarada()).toBe('_ _ _ _');
  });

  it('Al inicializar un juego con una palabra de distinta longitud (ej. "ALA"), la palabra enmascarada debe tener la longitud correcta ("_ _ _")', () => {
    const juego = new Ahorcado('ALA');
    expect(juego.palabraEnmascarada()).toBe('_ _ _');
  });

  it('El juego debe guardar el estado inicial (sin letras adivinadas aún)', () => {
    const juego = new Ahorcado('GATO');
    // @ts-ignore - Ignoramos el chequeo para ver el ROJO real por falta del método
    expect(juego.letrasAdivinadas()).toEqual([]);
  });
});

describe('Ahorcado - Adivinar letra correcta', () => {
  it('Al adivinar una letra presente, se deben revelar todas sus ocurrencias en la palabra enmascarada', () => {
    const juego = new Ahorcado('ALA');
    // @ts-ignore
    juego.adivinar('A');
    expect(juego.palabraEnmascarada()).toBe('A _ A');
  });

  it('La comparación de letras debe ser case-insensitive (minúsculas coinciden con mayúsculas)', () => {
    const juego = new Ahorcado('ALA');
    // @ts-ignore
    juego.adivinar('a');
    expect(juego.palabraEnmascarada()).toBe('A _ A');
  });

  it('La palabra enmascarada se representa bien (guiones para lo oculto)', () => {
    const juego = new Ahorcado('GATO');
    // @ts-ignore
    juego.adivinar('T');
    expect(juego.palabraEnmascarada()).toBe('_ _ T _');
  });

  it('La letra acertada no descuenta vidas', () => {
    const juego = new Ahorcado('GATO');
    // @ts-ignore
    juego.adivinar('A');
    expect(juego.vidas()).toBe(6);
  });
});

describe('Ahorcado - Fallar letra', () => {
  it('Adivinar una letra ausente en la palabra descuenta 1 vida', () => {
    const juego = new Ahorcado('GATO');
    // @ts-ignore
    juego.adivinar('E');
    expect(juego.vidas()).toBe(5);
  });

  it('La palabra enmascarada no se modifica tras un fallo', () => {
    const juego = new Ahorcado('GATO');
    // @ts-ignore
    juego.adivinar('E');
    expect(juego.palabraEnmascarada()).toBe('_ _ _ _');
  });

  it('El fallo es case-insensitive (intentar `e` o `E` es el mismo fallo y descuenta 1 sola vida)', () => {
    const juego = new Ahorcado('GATO');
    // @ts-ignore
    juego.adivinar('e');
    // @ts-ignore
    juego.adivinar('E');
    expect(juego.vidas()).toBe(5);
  });

  it('Lista las letras erradas de forma separada', () => {
    const juego = new Ahorcado('GATO');
    // @ts-ignore
    juego.adivinar('E');
    // @ts-ignore
    juego.adivinar('X');
    // @ts-ignore - Ignoramos para ver el rojo por falta de método
    expect(juego.letrasErradas()).toEqual(['E', 'X']);
  });

  it('Solo se puede ingresar una letra', () => {
    const juego = new Ahorcado('GATO');
    // @ts-ignore
    juego.adivinar('XYZ');
    expect(juego.vidas()).toBe(6);
    // @ts-ignore
    expect(juego.letrasErradas()).toEqual([]);
  });
});

describe('Ahorcado - Ganar', () => {
  it('Adivinar la última letra faltante cambia el estado del juego a "GANADO"', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('G');
    juego.adivinar('A');
    juego.adivinar('T');
    juego.adivinar('O');
    // @ts-ignore - Ignoramos el chequeo para ver el rojo por falta del método
    expect(juego.estado()).toBe('GANADO');
  });
  it('Al ganar el juego, se debe devolver el mensaje "GANASTE"', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('G');
    juego.adivinar('A');
    juego.adivinar('T');
    juego.adivinar('O');
    // @ts-ignore - Ignoramos para ver el rojo por falta del método
    expect(juego.mensaje()).toBe('GANASTE');
  });

  it('Al completarse la palabra, la versión enmascarada debe coincidir con la palabra original (no quedan guiones)', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('G');
    juego.adivinar('A');
    juego.adivinar('T');
    juego.adivinar('O');
    expect(juego.palabraEnmascarada()).toBe('G A T O');
  });

  it('Una vez que el juego está ganado, cualquier intento adicional de adivinar letras debe ser ignorado', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('G');
    juego.adivinar('A');
    juego.adivinar('T');
    juego.adivinar('O');
    // Intentar adivinar una letra incorrecta después de ganar
    juego.adivinar('X');
    // Las vidas no deberían descontarse
    expect(juego.vidas()).toBe(6);
  });
});

describe('Ahorcado - Perder', () => {
  it('Al fallar 6 veces, el estado del juego cambia a "PERDIDO"', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('Q');
    juego.adivinar('W');
    juego.adivinar('E');
    juego.adivinar('R');
    juego.adivinar('Y');
    juego.adivinar('U');

    expect(juego.estado()).toBe('PERDIDO');
  });

  it('Al perder, el método mensaje() devuelve "PERDISTE"', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('Q');
    juego.adivinar('W');
    juego.adivinar('E');
    juego.adivinar('R');
    juego.adivinar('Y');
    juego.adivinar('U');

    expect(juego.mensaje()).toBe('PERDISTE');
  });

  it('Al perder, la palabra revelada debe mostrarse completa (sin guiones)', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('Q');
    juego.adivinar('W');
    juego.adivinar('E');
    juego.adivinar('R');
    juego.adivinar('Y');
    juego.adivinar('U');

    expect(juego.palabraEnmascarada()).toBe('G A T O');
  });

  it('Una vez que el juego está perdido, cualquier intento adicional de adivinar letras debe ser ignorado (no descuenta más vidas)', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('Q');
    juego.adivinar('W');
    juego.adivinar('E');
    juego.adivinar('R');
    juego.adivinar('Y');
    juego.adivinar('U');

    juego.adivinar('I');
    expect(juego.vidas()).toBe(0);
  });

  it('Al perder, las vidas deben ser exactamente 0', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('Q');
    juego.adivinar('W');
    juego.adivinar('E');
    juego.adivinar('R');
    juego.adivinar('Y');
    juego.adivinar('U');

    expect(juego.vidas()).toBe(0);
  });
});

describe('Ahorcado - Entrada inválida', () => {
  it('UT1 - Al intentar ingresar algo que no es una letra, no se deben modificar las vidas', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('3');
    expect(juego.vidas()).toBe(6);
  });

  it('UT2 - Al intentar ingresar algo que no es una letra, la palabra enmascarada debe permanecer igual', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('3');
    expect(juego.palabraEnmascarada()).toBe('_ _ _ _');
  });

  it('UT3 - Al intentar ingresar algo que no es una letra, la letra ingresada debe ser ignorada', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('!');
    // El estado sigue siendo JUGANDO: el carácter no fue procesado
    expect(juego.estado()).toBe('JUGANDO');
  });

  it('UT4 - Al intentar ingresar algo que no es una letra, no se deben modificar las letras adivinadas', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('3');
    expect(juego.letrasAdivinadas()).toEqual([]);
  });

  it('UT5 - Al intentar ingresar algo que no es una letra, se debe mostrar un mensaje de error', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('3')
    expect(juego.error()).toBe('Caracter invalido');
  });
});

describe('Ahorcado - Letra repetida', () => {
  it('UT1 - Al reintentar una letra ya acertada, no se deben modificar las vidas.', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('A');
    juego.adivinar('A');

    expect(juego.vidas()).toBe(6);
  });

  it('UT2 - Al reintentar una letra ya acertada, no debe cambiar la palabra enmascarada', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('A');
    expect(juego.palabraEnmascarada()).toBe('_ A _ _');

    juego.adivinar('A');
    expect(juego.palabraEnmascarada()).toBe('_ A _ _');
  });

  it('UT3 - Al reintentar una letra ya fallada, no se deben modificar las letras adivinadas', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('Z');
    expect(juego.letrasAdivinadas()).toEqual(['Z']);

    juego.adivinar('Z');
    expect(juego.letrasAdivinadas()).toEqual(['Z']);
  });

  it('UT4 - Al reintentar una letra ya fallada, no la agrega dos veces a la lista de letras erradas', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('Z');
    expect(juego.letrasErradas()).toEqual(['Z']);

    juego.adivinar('Z');
    expect(juego.letrasErradas()).toEqual(['Z']);
  });

  it('UT5 - Al reintentar una letra ya usada, se debe mostrar un mensaje de error', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('A');
    expect(juego.error()).toBe('');

    juego.adivinar('A');
    expect(juego.error()).toBe('Ya intentaste esa letra');
  });
});

describe('Ahorcado - Soporte de acentos y ñ', () => {
  it('UT1 - adivinar una letra sin acento ("A") acierta la letra con acento ("Á") en la palabra secreta', () => {
    const juego = new Ahorcado('ÁRBOL');
    juego.adivinar('A');
    expect(juego.palabraEnmascarada()).toBe('Á _ _ _ _');
    expect(juego.vidas()).toBe(6);
  });

  it('UT2 - adivinar una letra con acento ("Á") acierta la letra sin acento ("A") en la palabra secreta', () => {
    const juego = new Ahorcado('ARBOL');
    juego.adivinar('Á');
    expect(juego.palabraEnmascarada()).toBe('A _ _ _ _');
    expect(juego.vidas()).toBe(6);
  });

  it('UT3 - la palabra enmascarada retiene los acentos originales de la palabra secreta', () => {
    const juego = new Ahorcado('MURCIÉLAGO');
    juego.adivinar('E');
    expect(juego.palabraEnmascarada()).toBe('_ _ _ _ _ É _ _ _ _');
  });

  it('UT4 - la letra "Ñ" es independiente de la "N"', () => {
    const juego = new Ahorcado('NIÑO');
    juego.adivinar('N');
    expect(juego.palabraEnmascarada()).toBe('N _ _ _');
    juego.adivinar('Ñ');
    expect(juego.palabraEnmascarada()).toBe('N _ Ñ _');
  });
});

describe('Ahorcado - Palabra al azar de una lista', () => {
  it('UT1 - Al inicializar un juego, la palabra debe elegirse al azar de una lista predefinida', () => {
    const juego = new Ahorcado(undefined, () => 'ÁRBOL');
    expect(juego.getPalabraSecreta()).toBe('ÁRBOL');
  });

  it('UT2 - Al inicializar un juego, la palabra debe estar en mayúsculas', () => {
    const juego = new Ahorcado(undefined, () => 'árbol');
    expect(juego.getPalabraSecreta()).toBe('ÁRBOL');
  });
})

describe('Ahorcado - Dibujo progresivo', () => {
  it('Con 0 errores, partesVisibles() devuelve una lista vacía', () => {
    const juego = new Ahorcado('GATO');
    // @ts-ignore - Ignoramos el chequeo de tipos para ver el ROJO
    expect(juego.partesVisibles()).toEqual([]);
  });

  it('Con 1 error, partesVisibles() devuelve ["soga", "cabeza"]', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('X');
    expect(juego.partesVisibles()).toEqual(["soga", "cabeza"]);
  });

  it('Con 2 errores, partesVisibles() devuelve ["soga", "cabeza", "cuerpo"]', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('X');
    juego.adivinar('Y');
    expect(juego.partesVisibles()).toEqual(["soga", "cabeza", "cuerpo"]);
  });

  it('Con 3 errores, partesVisibles() devuelve ["soga", "cabeza", "cuerpo", "brazoIzquierdo"]', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('X');
    juego.adivinar('Y');
    juego.adivinar('Z');
    expect(juego.partesVisibles()).toEqual(["soga", "cabeza", "cuerpo", "brazoIzquierdo"]);
  });

  it('Con 4 errores, partesVisibles() devuelve ["soga", "cabeza", "cuerpo", "brazoIzquierdo", "brazoDerecho"]', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('X');
    juego.adivinar('Y');
    juego.adivinar('Z');
    juego.adivinar('W');
    expect(juego.partesVisibles()).toEqual(["soga", "cabeza", "cuerpo", "brazoIzquierdo", "brazoDerecho"]);
  });

  it('Con 5 errores, partesVisibles() devuelve ["soga", "cabeza", "cuerpo", "brazoIzquierdo", "brazoDerecho", "piernaIzquierda"]', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('X');
    juego.adivinar('Y');
    juego.adivinar('Z');
    juego.adivinar('W');
    juego.adivinar('Q');
    expect(juego.partesVisibles()).toEqual(["soga", "cabeza", "cuerpo", "brazoIzquierdo", "brazoDerecho", "piernaIzquierda"]);
  });

  it('Con 6 errores (juego perdido), partesVisibles() devuelve todas las partes del cuerpo más la cara de muerto', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('X');
    juego.adivinar('Y');
    juego.adivinar('Z');
    juego.adivinar('W');
    juego.adivinar('Q');
    juego.adivinar('R');
    expect(juego.partesVisibles()).toEqual([
      "soga", "cabeza", "cuerpo", "brazoIzquierdo",
      "brazoDerecho", "piernaIzquierda", "piernaDerecha",
      "ojosX", "bocaTriste"
    ]);
  });

  it('Cada error agrega una parte sin modificar las anteriores (acumulativo)', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('X');
    const partesConUnError = juego.partesVisibles();
    juego.adivinar('Y');
    const partesConDosErrores = juego.partesVisibles();
    // Las partes del primer error siguen presentes en el segundo
    expect(partesConDosErrores.slice(0, partesConUnError.length)).toEqual(partesConUnError);
  });

  it('La base y la horca se muestran siempre (verificado vía AT, el dominio no lo devuelve como parte)', () => {
    const juego = new Ahorcado('GATO');
    expect(juego.partesVisibles()).not.toContain('base');
  });

  it('Al perder, la cara muestra ojos X y boca triste; con menos de 6 errores no aparecen', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('X');
    juego.adivinar('Y');
    juego.adivinar('Z');
    juego.adivinar('W');
    juego.adivinar('Q');
    // 5 errores: no debería tener cara de muerto
    expect(juego.partesVisibles()).not.toContain("ojosX");
    expect(juego.partesVisibles()).not.toContain("bocaTriste");
    // 6to error: pierde
    juego.adivinar('R');
    expect(juego.partesVisibles()).toContain("ojosX");
    expect(juego.partesVisibles()).toContain("bocaTriste");
  });
});

describe('Ahorcado - Jugar de nuevo', () => {
  it('UT1 - Al reiniciar el juego, las vidas vuelven a ser 6', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('X');
    juego.adivinar('Y');
    juego.adivinar('Z');
    // @ts-ignore - reiniciar() no existe todavía; queremos ver el ROJO
    juego.reiniciar('GATO');
    expect(juego.vidas()).toBe(6);
  });
});
