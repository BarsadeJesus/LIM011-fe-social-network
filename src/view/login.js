import { emailLog, controlFb, controlGoogle } from '../firebase.js';

//import { firebaseFacebook } from '../facebook-register.js';


export const viewLogin =  () => {
    const logContainer = document.createElement('div');
    logContainer.innerHTML = '';
    const loginTemplate = `
    <main class="main-init">
    <section class="init-img"><img src="../src/image/header-phone.jpg" alt=""></section>
    <section>
    <h2>codebook</h2>
    <h5>!Bienvenida, coder!</h5>
    <form>
    <input type="email" name = "Correo" id = "input-email" placeholder= "Email" class="field-login"><br><br>
    <input type="password" name = "Contraseña" id = "input-password" placeholder="  Password" class="field-login"> <br><br>
    <p class="error" id="error"></p>
    <button type="submit" id = "btn-login" value="Log in" class="field-login button">Log in</button>
    <p class="registro">O bien ingresa con...</p>
    </form>  
    <div class = "btn-fb-google">
      <a id="fb" href="#"><img id = "icon-facebook" src="./image/facebook.png" class = "icons" alt="facebook icon"></a>
      <a id="goog" href="#"><img id = "icon-email" src="./image/search.png" class = "icons" alt="emai icon"></a>   
    </div>  
    <label class="registro">¿No tienes una cuenta?&nbsp;<a class="bold" href="#/register" id="registrate">Regístrate.</a></label>
  </section>
  </main>`;

  logContainer.innerHTML = loginTemplate;
   
   logContainer.querySelector('#fb').addEventListener('click', (event) => {
    event.preventDefault();
    controlFb();
   });
   logContainer.querySelector('#goog').addEventListener('click', (event) => {
    event.preventDefault();
    controlGoogle();
   });
   

  logContainer.querySelector('button[type = "submit"]').addEventListener('click', (event) => {
   event.preventDefault();
   const email = logContainer.querySelector('#input-email').value;
   const password = logContainer.querySelector('#input-password').value;

   emailLog(email, password);
  })
  return logContainer;
};





//buttonLogInFacebbok.addEventListener('click', controllerFacebook);
//buttonLogInGoogle.addEventListener('click', controllerGoogle);

/*
logContainer.innerHTML = loginTemplate;
logContainer.classList.add('center');

const btnLogEmail = logContainer.querySelector('#btn-login');
const btnLogFacebbok = logContainer.querySelector('#fb');
const btnLogGoogle = logContainer.querySelector('#goog');

btnLogEmail.addEventListener('click', controLogin);
btnLogFacebbok.addEventListener('click', controlFb);
btnLogGoogle.addEventListener('click', controlGoogle);*/

  /*const divElemt = document.createElement('div');
  divElemt.innerHTML = viewLogin;
  
 divElemt.querySelector('img[src="./image/facebook.png"]').addEventListener('click', (e) => {
    e.preventDefault();
    const faceRegister = e.target.parentElement.querySelector("#icon-facebook");
    console.log((faceRegister));
    facebboAuth();
     
  })
  return divElemt;
};*/

/*const facebookInit = () => {

  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().singInWithPopup(provider).then((result) => {
   alert('Exito!!');
   console.log(result);
   
  })
}
facebookInit();*/
