import { Ahorcado } from '../domain/Ahorcado';

export function mountApp(container: HTMLElement, juego: Ahorcado) {
  const render = () => {
    container.innerHTML = `
      <div>
        <h1 data-testid="word">${juego.palabraEnmascarada()}</h1>
        <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
        <input type="text" placeholder="Ingresá una letra" autofocus />
      </div>
    `;

    const input = container.querySelector('input');
    if (input) {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
          juego.adivinar(input.value.trim());
          render();
        }
      });
    }
  };

  render();
}
