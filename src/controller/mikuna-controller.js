import { getPost, savePost } from '../firebase/post.js';
import { currentUser } from '../firebase/auth.js'
import { paintPost } from '../view/template.js'

let iconPrivate = 0;

//llamada a guardar post en el database
export const createPostEvent = (event) => {
  event.preventDefault();
  const contentForPost = document.querySelector('#content-for-post')
  const type = contentForPost.getAttribute('name');
  const user = currentUser();
  savePost(user, contentForPost.value, type).then(() => {
    //paintMikunaPost(user);
    window.location.hash = '#/mikuna';
  }).catch(error => console.log(error));
}

//llamada a repintar la red social
export const paintMikunaPost = (user) => {
  getPost()
    .onSnapshot((querySnapshot) => {
      document.querySelector(".container-list-posts").innerHTML = ' ';
      querySnapshot.forEach((post) => {
     //  console.log(post);        
       //if ( post.data().privacity  === 'Public'  || ( post.data().uidUser  ===  user.id  &&  post.data().privacity  ===  'Private' )) 
        paintPost(post.data(), post.id);
      });
    });
};

export let iconPrivateEvent = (event) => {
  event.preventDefault();
  if (event.target.id == 'icon-private') {
    document.querySelector('#content-for-post').setAttribute('name','Private');
  } else {
    document.querySelector('#content-for-post').setAttribute('name','Public');
    event.classList.add('.active-icon')
  }
}
