import { registerLog, createUserCollection } from '../firebase/auth.js';

const errorEmail = (email, password) => {
  password.classList.remove('field-error');
  email.classList.add('field-error');
};
const errorPassword = (email, password) => {
  email.classList.remove('field-error');
  password.classList.add('field-error');
};

export const registerLogEvent = (event) => {
  event.preventDefault();
  // console.log('hola');
  //  console.log(response.user.uid);
  const name = document.querySelector('#input-name').value;
  const email = document.querySelector('#input-email').value;
  const password = document.querySelector('#field-password').value;
  const errorMsg = document.querySelector('.ms-error').value;
  registerLog(email, password).then((response) => {
    // console.log(response.user.uid);
    createUserCollection(name, email, response.user.uid);
    window.location.hash = '#/mikuna';
  })
    .catch((error) => {
      switch (error.code) {
        case 'auth/invalid-email':
          errorEmail();
          errorMsg.innerHTML = '**El formato del correo ingresado no es valido, verifica e intente de nuevo**';
          break;
        case 'auth/email-already-in-use':
          errorEmail();
          errorMsg.innerHTML = '**El correo electrónico proporcionado esta siendo utilizado por otro miembro., verifica e intente de nuevo**';
          break;
        case 'auth/email-already-exists':
          errorEmail();
          errorMsg.innerHTML = '**El correo electrónico proporcionado esta siendo utilizado por otro miembro., verifica e intente de nuevo**';
          break;
        case 'auth/weak-password':
          errorPassword();
          errorMsg.innerHTML = '**La contraseña debe tener al menos 6 caracteres**';
          break;
        default:
          // console.log(error);
          break;
      }
    });
};

export const hidePassword = () => {
  const password = document.querySelector('#field-password');
  const iconNotPassword = document.querySelector('#icon-notshow-password');
  const iconShowPassword = document.querySelector('#icon-show-password');
  password.setAttribute('type', 'text');
  iconNotPassword.classList.add('hide');
  iconShowPassword.classList.remove('hide');
};
export const showPassword = () => {
  const password = document.querySelector('#field-password');
  const iconNotPassword = document.querySelector('#icon-notshow-password');
  const iconShowPassword = document.querySelector('#icon-show-password');
  password.setAttribute('type', 'password');
  iconNotPassword.classList.remove('hide');
  iconShowPassword.classList.add('hide');
};
