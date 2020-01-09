import { deletePost, editPost} from '../firebase/post.js';
import { currentUser } from '../firebase/auth.js';

export const deletePostEvent = (event) => {
    console.log(event);
    
    event.preventDefault();
    const btnDelete = event.target;
    const postId = btnDelete.closest('.container-posts').id;
    const userId = btnDelete.closest('.container-posts').querySelector('.header-post').id;
    if (currentUser().id === userId) {
        deletePost(postId)  
            .then((doc) => {
                window.location.hash = '#/mikuna';
                console.log('texto eliminado', doc);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export const editPostEvent = (e) => {
e.preventDefault();
const btnEdit = event.target;
const idPost = btnEdit.closest('.container-posts').id;
//const post = getPostById(idPost);
const newText = btnEdit.closest('.container-posts').querySelector('.text-post').textContent;
const userId = btnEdit.closest('.container-posts').querySelector('.header-post').id;

if (currentUser().id === userId){
    editPost(idPost, newText)
    .then((doc) => {
        console.log(postEDit);
        
        console.log('se edito!', doc);
    })
    .catch((error) => {
        console.log('falló' ,error); 
    });
}
}

export const ownerPost = (userPost) =>{
    if(userPost.uidUser === currentUser().id)
    return 1;
    else
    return 0;
};

export const privacityPostEvent = (event) =>{

}

export const commentPostEvent = (event) => {
    console.log(event);
    
};
