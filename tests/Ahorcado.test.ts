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



