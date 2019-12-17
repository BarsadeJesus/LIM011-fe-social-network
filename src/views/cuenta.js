export default() => {
    const saludo="hola";
    const divElem=document.createElement("div");
    divElem.innerHTML=saludo;
    return divElem;
}