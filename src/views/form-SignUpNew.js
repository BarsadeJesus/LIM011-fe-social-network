
import { authen } from '../app.js';

export default() => {
    const viewFormSignUpNew = `
    <form action="" class="formulario-registro"></form>
    <input type="text" id="name" value="" placeholder="Name">
    <input type="text" id="gender" value="" placeholder="Gender">
    <input type="email" id="input-email" placeholder="Email">
    <input type="password" id="input-password" placeholder="Password">
    <input type="password" id="input-password-confirm" placeholder="Confirm Password">
    <button type="submit" id="button-loginNU">Sing up</button>
    </form>`;

 const divElemt=document.createElement("div");
 divElemt.innerHTML=viewFormSignUpNew;
 divElemt.querySelector('button[type="submit"]').addEventListener('click', (event) => {
    const name=divElemt.querySelector("#name").value;
    const gender=divElemt.querySelector("#gender").value;
    const email=divElemt.querySelector("#input-email").value;
    const password=divElemt.querySelector("#input-password").value;
    const passwordConfirm=divElemt.querySelector("#input-password-confirm").value;
    authen(name, gender, email, password, passwordConfirm);
     })
 return divElemt;
}