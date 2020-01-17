import { components } from '../view/index.js';


//  vista de templates
export const viewTemplate = (router) => {
    //  base es la caja basia que debomos llenar - extraido desde el html
    const base = document.getElementById('base');
    //' ' limpia el contenido de un elemento 
    base.innerHTML = '';
    switch (router) {
        case '/':
        case '':
        case '#/':
            { return base.appendChild(components.vistaLogin()) }
        case '#/register':
            { return base.appendChild(components.vistaRegistro()) }
        case '#/mikuna':
            { return base.appendChild(components.vistaMikuna());
        }
        default: 
        break; 
    }
};
