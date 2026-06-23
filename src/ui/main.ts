import { Ahorcado } from '../domain/Ahorcado';

export function mountApp(container: HTMLElement, juego: Ahorcado) {
  container.innerHTML = `
    <div>
      <h1 data-testid="word">${juego.palabraEnmascarada()}</h1>
      <p>Vidas: <span data-testid="lives">6</span></p>
      <input type="text" placeholder="Adivina una letra" aria-label="Adivina una letra" />
    </div>
  `;

  const input = container.querySelector('input');
  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const letra = input.value;
        juego.adivinar(letra);
        // Acá se re-renderizaría, por ahora lo dejamos mínimo
        input.value = '';
      }
    });
  }
}
