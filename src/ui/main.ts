import { Ahorcado } from '../domain/Ahorcado';

export function mountApp(container: HTMLElement, juego: Ahorcado, palabraInicial: string | null) {
  container.innerHTML = `
    <div>
      <div id="game-ui"></div>
      <input type="text" placeholder="Ingresá una letra" autofocus />
    </div>
  `;

  const input = container.querySelector('input')!;
  const gameUi = container.querySelector('#game-ui')!;

  const render = () => {
    const visibles = juego.partesVisibles();
    const terminado = juego.estado() === 'GANADO' || juego.estado() === 'PERDIDO';
    gameUi.innerHTML = `
        <svg data-testid="hangman-drawing" width="200" height="250" viewBox="0 0 200 250">
          <g data-testid="hangman-base">
            <line x1="10" y1="240" x2="90" y2="240" stroke="black" stroke-width="4"/>
            <line x1="50" y1="240" x2="50" y2="20" stroke="black" stroke-width="4"/>
            <line x1="50" y1="20" x2="150" y2="20" stroke="black" stroke-width="4"/>
          </g>
          
          <g data-part="soga" display="${visibles.includes('soga') ? 'inline' : 'none'}">
            <rect x="148" y="20" width="4" height="30" fill="brown" />
          </g>
          
          <g data-part="cabeza" display="${visibles.includes('cabeza') ? 'inline' : 'none'}">
            <circle cx="150" cy="70" r="20" stroke="black" stroke-width="3" fill="none"/>
          </g>
          
          <g data-part="ojosX" display="${visibles.includes('ojosX') ? 'inline' : 'none'}">
            <path d="M140,65 L146,71 M146,65 L140,71 M154,65 L160,71 M160,65 L154,71" stroke="black" stroke-width="2" fill="none" />
          </g>
          
          <g data-part="bocaTriste" display="${visibles.includes('bocaTriste') ? 'inline' : 'none'}">
            <rect x="145" y="79" width="10" height="2" fill="black" />
          </g>
          
          <g data-part="cuerpo" display="${visibles.includes('cuerpo') ? 'inline' : 'none'}">
            <rect x="148" y="90" width="4" height="60" fill="black" />
          </g>
          
          <g data-part="brazoIzquierdo" display="${visibles.includes('brazoIzquierdo') ? 'inline' : 'none'}">
            <line x1="150" y1="100" x2="120" y2="130" stroke="black" stroke-width="3" />
          </g>
          
          <g data-part="brazoDerecho" display="${visibles.includes('brazoDerecho') ? 'inline' : 'none'}">
            <line x1="150" y1="100" x2="180" y2="130" stroke="black" stroke-width="3" />
          </g>
          
          <g data-part="piernaIzquierda" display="${visibles.includes('piernaIzquierda') ? 'inline' : 'none'}">
            <line x1="150" y1="150" x2="120" y2="190" stroke="black" stroke-width="3" />
          </g>
          
          <g data-part="piernaDerecha" display="${visibles.includes('piernaDerecha') ? 'inline' : 'none'}">
            <line x1="150" y1="150" x2="180" y2="190" stroke="black" stroke-width="3" />
          </g>
        </svg>

        <h1 data-testid="word">${juego.palabraEnmascarada()}</h1>
        <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
        <p>Letras erradas: <span data-testid="missed-letters">${juego.letrasErradas().join(', ')}</span></p>
        <p data-testid="error">${juego.error()}</p>
        <p data-testid="status">${juego.mensaje()}</p>
        ${terminado ? `<button id="btn-reiniciar">Jugar de nuevo</button>` : ''}
    `;

    if (terminado) {
      gameUi.querySelector('#btn-reiniciar')!.addEventListener('click', () => {
        juego.reiniciar(palabraInicial);
        render();
      });
    }
  };

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value.trim() !== '') {
      juego.adivinar(input.value.trim());
      input.value = '';
      render();
    }
  });

  render();
}
