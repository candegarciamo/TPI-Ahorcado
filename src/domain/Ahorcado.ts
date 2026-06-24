export class Ahorcado {
  private letras: string[] = [];
  private _vidas: number = 6;

  constructor(private palabraSecreta: string) { }

  vidas(): number {
    return this._vidas;
  }

  adivinar(letra: string): void {
    const letraUpper = letra.toUpperCase();
    if (!this.letras.includes(letraUpper)) {
      this.letras.push(letraUpper);
      if (!this.palabraSecreta.toUpperCase().includes(letraUpper)) {
        this._vidas--;
      }
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
