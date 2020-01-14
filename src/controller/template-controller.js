import { deletePost, getPostById, updatePostPrivacity, updatePostLike } from '../firebase/post.js'
import { currentUser } from '../firebase/auth.js'

export const deletePostEvent = (event) => {
    event.preventDefault();
    const btnDelete = event.target;
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

