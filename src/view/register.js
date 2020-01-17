import { registerLogEvent, hidePassword, showPassword } from '../controller/register-controller.js';

export default () => {
  const regContainer = document.createElement('div');
  const registerTemplate = `
  <main class="main-init">
    <section class="init-banner"><img src = "./image/index-2.jpg"></section>
    <section class = "init-login">
    <figure><img src = "./image/logo.jpg"></figure>
    <h5>Registre sus datos</h5>
  <form>
  <input type="text" name = "Name" id = "input-name" placeholder= "  Name" class="field"><br><br>
  <input type="email" name = "Correo" id = "input-email" placeholder= "  Email" class="field"><br><br>
  <input type="password" name = "Contraseña" id = "field-password" placeholder="  Password" class="field"> 
  <span id = "icon-notshow-password" ><i class="icon-inside-field fas fa-eye-slash"></i></span>
  <span id = "icon-show-password" class = "hide" ><i class="icon-inside-field  far fa-eye"></i></span><br><br>
  <p class="ms-error"></p>
  <button type="submit" id = "btn-login" value="Registrar" class="field button">Log in</button><br><br>
  </form>  
  <p>¿Ya tienes una cuenta?&nbsp;<a href="#/">Iniciar Sesión</a></p>
</section>
</main>`;

  regContainer.innerHTML = registerTemplate;

  //  eventos
  regContainer.querySelector('button[type = "submit"]').addEventListener('click', registerLogEvent);
  regContainer.querySelector('#icon-notshow-password').addEventListener('click', hidePassword);
  regContainer.querySelector('#icon-show-password').addEventListener('click', showPassword);
  return regContainer;
};
