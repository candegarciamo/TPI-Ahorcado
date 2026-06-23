export class Ahorcado {
  constructor(private palabraSecreta: string) { }

  vidas(): number {
    return 6;
  }

  palabraEnmascarada(): string {
    return this.palabraSecreta.split('').map(() => '_').join(' ');
  }
}
