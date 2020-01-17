import {createPostEvent, paintMikunaPost, iconPrivateEvent, signOutSession} from '../controller/mikuna-controller.js'
import {currentUser} from '../firebase/auth.js'

export default () => {
  const user = currentUser();
  const mikunaMain = document.createElement('div');
  const postTemplate = `
  <main class = "display-flex">
  <section class="social-perfil">
  <figure><img class="photo-current-user" src='${user.photo}'></figure>
      <h2>${user.name}</h2>
      <p>${user.email}<p>
  <button class = "btn-cerrar-sesion">Cerrar Sesión</button>
  </section>
  <section class= "social-post">
  <section class = "input-post">
  <div class = header-private>
  <div class = div-input-private>
  <i class="fas fa-lock icon-post-private" id = icon-private></i>
  <i class="fas fa-lock-open icon-post-private" id = icon-not-private></i> 
  </div>
  </div>
  <textarea id = "content-for-post" name = "Public" placeholder="¿Tienes algo que contarnos?"></textarea>
  <div class = footer-input-post>
  <div><i class="fas fa-images icon-post-img"></i></div>
  <button id = "button-create-post" class = "btn-publicar">Publicar</button>
  <div>
  </section>
  <div class="container-list-posts" id="container-posts"></div>
  </section>
   </main>`;

  mikunaMain.innerHTML = postTemplate;
  paintMikunaPost(user);
  mikunaMain.querySelector('#button-create-post').addEventListener('click', createPostEvent);
  mikunaMain.querySelector('.btn-cerrar-sesion').addEventListener('click', signOutSession);
  mikunaMain.querySelectorAll('.icon-post-private').forEach(icon => icon.addEventListener('click', iconPrivateEvent));
  return mikunaMain;
};
