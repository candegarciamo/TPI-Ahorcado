export class Ahorcado {
  constructor(private palabraSecreta: string) { }

  // Métodos básicos para que no falle todo al inicio
  adivinar(letra: string): void {
    // A implementar
  }

  palabraEnmascarada(): string {
    return this.palabraSecreta.split('').map(() => '_').join(' ');
  }
}
