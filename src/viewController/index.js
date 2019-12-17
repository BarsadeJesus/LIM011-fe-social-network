import {components} from '../views/index.js'

const changeView=(route)=> {
    const container=document.getElementById("container");
    container.innerHTML='';
    switch (route){
        case '': 
            { return container.appendChild(components.homeRedsocial()) }
        case '#/Registrate':
            { return container.appendChild(components.regUserNew()) }
        case '#/cuenta':
            { return container.appendChild(components.cuenta()) }
        
        default:
            break;
    }
} 
export {changeView};