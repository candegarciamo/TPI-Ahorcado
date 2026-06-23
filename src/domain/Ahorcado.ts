export class Ahorcado {
  private letras: string[] = [];

  constructor(private palabraSecreta: string) { }

  vidas(): number {
    return 6;
  }

  palabraEnmascarada(): string {
    return this.palabraSecreta.split('').map(() => '_').join(' ');
  }

  letrasAdivinadas(): string[] {
    return this.letras;
  }
}
