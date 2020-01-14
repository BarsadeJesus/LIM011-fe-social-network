import { deletePost, editPost  } from '../firebase/post.js'
import { currentUser } from '../firebase/auth.js'

export const deletePostEvent = (event) => {
    console.log(event);
    
    event.preventDefault();
    const btnDelete = event.target; //hay muchos iconos delete 
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
//e.preventDefault();
const btnEdit = e.target;
//document.querySelector('.text-post').disabled = true;
//const idPost = btnEdit.closest('.container-posts').id;
//const post = getPostById(idPost);
document.querySelector('#edit-text-post').value= document.querySelector('.text-post').textContent;
//const newText = document.querySelector('.text-post').textContent;
console.log(newText);


//document.querySelector('.text-post').remove();

} 
 
export const savePostEvent = (idPost) => {
    const newText = document.querySelector('.textareaEdit').value;
    console.log(idPost);
    
    //const userId = btnSave.closest('.container-posts').querySelector('.header-post').id;
    //if (currentUser().id === userId){
        editPost(idPost, newText)        
        .then((doc) => {
            console.log('se actualizo!', doc);
        })
        .catch((error) => {
            console.log('falló' ,error); 
        });
    //}

}

export const ownerPost = (userPost) =>{
    if(userPost.uidUser === currentUser().id)
    return 1;
    else
    return 0;
};

export const privacityPostEvent = (event) => {
    console.log(event);    
    const postId = event.target.closest('.container-posts').id;
   updatePost(postId,privacity,);
}

export const commentPostEvent = (event) => {
    console.log(event);
    
};
