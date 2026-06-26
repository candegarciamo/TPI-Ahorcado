import { Ahorcado } from '../domain/Ahorcado';
import { mountApp } from './main';

// Leemos la palabra de la URL para cumplir con el seam determinista
const urlParams = new URLSearchParams(window.location.search);
const word = urlParams.get('word');

// Inicializamos el objeto de dominio
const juego = new Ahorcado(word);

// Montamos la UI inyectándole el objeto
const appContainer = document.getElementById('app');
if (appContainer) {
    mountApp(appContainer, juego);
}
