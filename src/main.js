
import { changeView } from "./viewController/index.js";
import { firebaseInitialize } from "./firebaseController.js";

const init = () => {
    firebaseInitialize();
    changeView(window.location.hash);
    
    window.addEventListener('hashchange', () => changeView(window.location.hash));
    
}

window.addEventListener('load', init);