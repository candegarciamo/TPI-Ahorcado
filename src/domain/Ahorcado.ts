export class Ahorcado {
  private letras: string[] = [];

  constructor(private palabraSecreta: string) { }

  vidas(): number {
    return 6;
  }

  adivinar(letra: string): void {
    const letraUpper = letra.toUpperCase();
    if (!this.letras.includes(letraUpper)) {
      this.letras.push(letraUpper);
    }
  }

  palabraEnmascarada(): string {
    return this.palabraSecreta
      .split('')
      .map(char => this.letras.includes(char.toUpperCase()) ? char : '_')
      .join(' ');
  }

  letrasAdivinadas(): string[] {
    return this.letras;
  }
}
