import { Ahorcado } from '../domain/Ahorcado';

export function mountApp(container: HTMLElement, juego: Ahorcado) {
  // Renderizamos lo mínimo y necesario que pide el AT 1 consultando a `juego`
  container.innerHTML = `
    <div>
      <h1 data-testid="word">${juego.palabraEnmascarada()}</h1>
      <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
    </div>
  `;
}
