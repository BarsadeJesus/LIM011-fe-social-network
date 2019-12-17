import { viewTemplate } from './view-controller/router.js';
import { firebaseInitialize } from './firebase-Controller.js';

//import { changeTemplate } from './view-controller/router.js';

const init = () => {
  firebaseInitialize();
  viewTemplate(window.location.hash);

  window.addEventListener('hashchange', () => viewTemplate(window.location.hash));
}

window.addEventListener('load', init);

