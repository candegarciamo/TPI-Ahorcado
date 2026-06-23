import { Ahorcado } from '../src/domain/Ahorcado';

describe('Ahorcado - Iniciar Partida', () => {
  it('Al inicializar un juego, las vidas iniciales deben ser 6', () => {
    const juego = new Ahorcado('GATO');

    // @ts-ignore - Ignoramos el chequeo de tipos para poder correr el test y verlo fallar (ROJO)
    expect(juego.vidas()).toBe(6);
  });
});



