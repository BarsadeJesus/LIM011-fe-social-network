import { loginUserRegistered, observer } from "../app.js";

export default() => {
    const viewFormHome = `
    <form action="" class="formulario-validacion" >
          <input type="email" id="inputEmail" placeholder="Email">
          <input type="password" id="inputPassword" placeholder="Password">
          <button type="submit" id="button-login">Log in</button> 
          <p>O bien ingresa con...</p>
          <figure>
            <img src="../src/image/facebook.png" alt="icon facebook">
            <img src="../src/image/search.png" alt="icon google">
          </figure>
          <i>No tienes una cuenta</i> <a href="#/Registrate">Regístrate</a>
          <i>No tienes una cuenta</i> <a href="#/cuenta">cuenta</a>
      </form>`;
    const divElem=document.createElement("div");
    divElem.innerHTML=viewFormHome;
    // divElem.querySelector('button[type="submit"]').addEventListener('click', (event) => {
    //     const email=divElem.querySelector("#inputEmail").value;
    //     const password=divElem.querySelector("#inputPassword").value;
    //     loginUserRegistered(email, password);
    // })
    divElem.querySelector('button[type="submit"]').addEventListener('click', (event) => {
      event.preventDefault();
      const email=divElem.querySelector("#inputEmail").value;
      const password=divElem.querySelector("#inputPassword").value;
      
      loginUserRegistered(email, password);
      observer();
      
  })
    return divElem;

}