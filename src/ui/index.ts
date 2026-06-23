import { Ahorcado } from '../domain/Ahorcado';
import { mountApp } from './main';

// Arranca la aplicación leyendo el parámetro word de la URL
const urlParams = new URLSearchParams(window.location.search);
const word = urlParams.get('word') || 'DEFAULT';

const juego = new Ahorcado(word);
mountApp(document.getElementById('app')!, juego);
