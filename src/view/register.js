//import { controlRegister } from '../controller.js'
import { registerLog} from '../firebase.js'
// antesssss      export const viewRegister = () => {
export default () => {
  const regContainer = document.createElement('div');
  const registerTemplate = `
  <main class="main-init">
  <section class="login-img"><img src="../src/image/login-phone.jpg" alt=""></section>
  <section class="section-register">
  <h4>Registre su informacion</h4>
  <form id = "form-register">
  <input type="text" id = "name" value = "" placeholder="Name" class="field-login"><br><br>
  <input type="email" id = "email" placeholder= "example@gmail.com" class="field-login"><br><br>
  <input type = "password" id = "password" placeholder = "Password" class="field-login"> <br><br>
  <button type="submit" id = "registro" value="Log in" class="field-login button">Regístrate</button>
  <p class="error" id="error"></p>
  </form>       
</section>
</main>`;

regContainer.innerHTML = registerTemplate;
regContainer.querySelector('button[type = "submit"]').addEventListener('click', (event) => {
  const register = {
    name : regContainer.querySelector('#name').value,
    email : regContainer.querySelector('#email').value,
    password : regContainer.querySelector('#password').value,
  }
  registerLog(register);
})
return regContainer;
};

/*regContainer.innerHTML = registerTemplate;
regContainer.classList.add('center');

const btnRegister = regContainer.querySelector('#registro');
btnRegister.addEventListener('click', () => {
  controlRegister();
})*/

  /*const divElemt = document.createElement('div');
  divElemt.innerHTML = viewPlaces;
  
  divElemt.querySelector('button[type="submit"]').addEventListener('click', (event) => {
    event.preventDefault();
    const nameUser = event.target.parentElement.querySelector("#name").value;    
    console.log(nameUser);
    // nameUser.value
  })
  return divElemt;*/