import { deletePost, getPostById, updatePostPrivacity, updatePostLike, editPost } from '../firebase/post.js'
import { currentUser } from '../firebase/auth.js'

export const deletePostEvent = (event) => {
    event.preventDefault();
    const btnDelete = event.target; //hay muchos iconos delete 
    const postId = btnDelete.closest('.container-posts').id;
    const userId = btnDelete.closest('.container-posts').querySelector('.header-post').id;
    if (currentUser().id === userId) {
        deletePost(postId)  
            .then((doc) => {
                window.location.hash = '#/mikuna';
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
        editPost(idPost, newText)        
        .then((doc) => {
            console.log('se actualizo!', doc);
        })
        .catch((error) => {
            console.log('falló' ,error); 
        });
    }

export const ownerPost = (userPost) => (userPost.uidUser === currentUser().id) ? 1 : 0;

export const privacityPostEvent = (event) => {
    const postId = event.target.closest('.container-posts').id;
    const value = event.target[event.target.value].innerText;
    updatePostPrivacity(postId, 'privacity', value);
}

export const likePostEvent = (event) => {
    const postId = event.target.closest('.container-posts').id;
    const idUser = currentUser().id;
    getPostById(postId)
        .then((doc) => {
            let arrayLike = doc.data().likes;
            if (arrayLike.includes(idUser)){
            arrayLike = arrayLike.filter(id => id != idUser);
            event.target.classList.add('selected');
        }else{
            arrayLike.push(idUser);
            event.target.classList.remove('selected');
        }
        updatePostLike(postId, arrayLike);
    })
}

