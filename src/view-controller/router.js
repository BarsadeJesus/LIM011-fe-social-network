//import { viewLogin } from '../view/login.js';
//import { viewRegister } from '../view/register.js';
import { components } from '../view/index.js';

// vista de templates
export const viewTemplate = (router) => {
    //base es la caja basia que debomos llenar - extraido desde el html
    const base = document.getElementById('base');
    //' ' limpia el contenido de un elemento 
    base.innerHTML = '';
    switch (router) {
        case '':
            { return base.appendChild(components.vistaLogin()) }
        case '#/register':
            { return base.appendChild(components.vistaRegistro()) }
        default: 
        break; 
    }
};

const changeRoute = (route) => {
    window.location.hash = route;
  };

  
/*case '#/login':
    base.innerHTML = '';
    base.appendChild(viewLogin());
    break;
case '#/register':
    base.appendChild(viewRegister());
    break;*/

//cambio de templates / vistas
/*export const changeTemplate = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#'){
    return viewTemplate('#/login');
    }
    return viewTemplate(hash);
};

export const init = () => {
    changeTemplate(window.location.hash);
    window.addEventListener('hashchange', () => changeTemplate(window.location.hash));
};*/

/*export const changeTmp = (hash) => {
    const id = hash.split('/')[1];
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = '';

    switch (hash) {
        case '':
        case '#':
        case '#/':
            { return sectionMain.appendChild(components.home()); }
        case '#/lugares':
            { return sectionMain.appendChild(components[id]()); }
        default:
            return sectionMain.appendChild(components.different())
    }
};*/


