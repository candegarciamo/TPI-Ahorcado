export class Ahorcado {
  private letras: string[] = [];
  private _vidas: number = 6;

  constructor(private palabraSecreta: string) { }

  vidas(): number {
    return this._vidas;
  }

  adivinar(letra: string): void {
    if (!this.palabraEnmascarada().includes('_')) {
      return;
    }
    const letraUpper = letra.toUpperCase();
    if (!this.letras.includes(letraUpper)) {
      this.letras.push(letraUpper);
      if (!this.palabraSecreta.toUpperCase().includes(letraUpper)) {
        this._vidas--;
      }
    }
  }

  palabraEnmascarada(): string {
    if (this._vidas === 0) {
      return this.palabraSecreta.split('').join(' ');
    }
    return this.palabraSecreta
      .split('')
      .map(char => this.letras.includes(char.toUpperCase()) ? char : '_')
      .join(' ');
  }

  letrasAdivinadas(): string[] {
    return this.letras;
  }

  letrasErradas(): string[] {
    return this.letras.filter(letra => !this.palabraSecreta.toUpperCase().includes(letra));
  }

  estado(): string {
    if (this._vidas === 0) {
      return 'PERDIDO';
    }
    if (!this.palabraEnmascarada().includes('_')) {
      return 'GANADO';
    }
    return 'JUGANDO';
  }

  mensaje(): string {
    if (this.estado() === 'GANADO') {
      return 'GANASTE';
    }
    if (this.estado() === 'PERDIDO') {
      return 'PERDISTE';
    }
    return '';
  }
}
