export class Ahorcado {
  private letras: string[] = [];
  private _vidas: number = 6;
  private _error: string = "";
  private readonly lista = ["GATO", "ALA", "NIÑO", "ÁRBOL", "MURCIÉLAGO"];
  private palabraSecreta: string;

  constructor(palabra?: string | null, selector = () => this.lista[Math.floor(Math.random() * this.lista.length)]) {
    this.palabraSecreta = (palabra ?? selector()).toUpperCase();
  }

  getPalabraSecreta(): string {
    return this.palabraSecreta;
  }

  private normalizar(texto: string): string {
    return texto.split('').map(char => {
      const upper = char.toUpperCase();
      if (upper === 'Ñ') return 'Ñ';
      return upper.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }).join('');
  }

  vidas(): number {
    return this._vidas;
  }

  adivinar(letra: string): void {
    if (letra.length !== 1 || !(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/.test(letra))) {
      this._error = "Caracter invalido";
      return;
    }
    if (!this.palabraEnmascarada().includes('_')) {
      this._error = "Juego terminado";
      return;
    }
    const letraUpper = this.normalizar(letra);
    if (!this.letras.includes(letraUpper)) {
      this.letras.push(letraUpper);

      const palabraNormalizada = this.normalizar(this.palabraSecreta);
      if (!palabraNormalizada.includes(letraUpper)) {
        this._vidas--;
      }
      this._error = "";
    } else {
      this._error = "Ya intentaste esa letra";
    }
  }

  palabraEnmascarada(): string {
    if (this._vidas === 0) {
      return this.palabraSecreta.split('').join(' ');
    }
    return this.palabraSecreta
      .split('')
      .map(char => {
        const charNormalizado = this.normalizar(char);
        return this.letras.includes(charNormalizado) ? char : '_';
      })
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

  error(): string {
    return this._error;
  }
}
