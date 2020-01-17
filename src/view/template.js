import { deletePostEvent, likePostEvent, ownerPost, privacityPostEvent, editPostEvent, savePostEvent } from '../controller/template-controller.js';

export const paintPost = (userPost, idPost) => {
    const container = document.createElement('div');
    container.classList.add('container-posts');
    
    container.id = idPost;
    let datePost = userPost.publicationDate.toDate().toString();
    datePost = datePost.substring(0, datePost.indexOf("GMT"));
    container.innerHTML = '';
    const template =
    `<section class = header-post id="${userPost.uidUser}">
    <div class = header-name-photo>
    <img class="post-user-photo" src="${userPost.photoUser}">
    <h2 class = user-name-post>${userPost.nameUser}<h2>
    </div>
    <div><h1>${datePost}<h1><div>
    </section>
    <section class = header-likes-privacity border>
    <section class = section-likes border>
    <label>Likes ${userPost.likes.length}</label><i class="fas fa-sort-up icon-arrow" id = "icon-show-likes"></i>
    </section>
    <section class = ${(ownerPost(userPost) === 0)?'hide':'menu-privacity '}>
    <select name="select-privacity" id = select-privacity>
    <option selected value="0">${userPost.privacity}</option>
    <option value="1">${(userPost.privacity === 'Private')?'Public':'Private'}</option>
    </select>
    </section>
    </section>
    <p class = 'text-post'>${userPost.contentPost}</p>
    <section class = footer-post>
    <div class = icon-comment-like><i class="far fa-thumbs-up margin-left" id = "icon-like"></i><i id = "icon-comment" class="far fa-comments margin-left"></i></div>
    <div class = ${(ownerPost(userPost) === 0)?'hide':'icon-edit-delete'}><i class="fas fa-edit margin-left" id = "icon-edit-post"></i><i class="fas fa-save margin-left" id="icon-save-post"></i><i class="fas fa-trash-alt margin-left" id="icon-delete-post"></i></div>
    </section>`
    //<button id="btn-save" type="submit">Guardar</button>
    container.innerHTML = template;
    document.querySelector('.container-list-posts').appendChild(container);

    //eventos 
    container.querySelector('#icon-delete-post').addEventListener('click', deletePostEvent);
    container.querySelector('#icon-save-post').addEventListener('click', (event) => {
        event.preventDefault();
        savePostEvent(idPost);
    });
    
    container.querySelector('#select-privacity').addEventListener('change', privacityPostEvent);
    container.querySelector('#icon-like').addEventListener('click', likePostEvent);


    //container.querySelector('#icon-edit-post').addEventListener('click', editPostEvent);
    container.querySelector('#icon-edit-post').addEventListener('click', (e) => {
        e.preventDefault();
        const btnEdit = e.target;
        const idPost1 = btnEdit.closest('.container-posts').id;
        const divTextareaPost= document.createElement('div');
        divTextareaPost.innerHTML='';
        const textareaPost= `
        <textarea class='textareaEdit' id='edit-text-post'>${userPost.contentPost}</textarea>
        `;
        console.log(textareaPost);
        divTextareaPost.innerHTML=textareaPost;
        document.querySelector('.text-post').classList.add('hide');
        document.querySelector('#' + idPost1).appendChild(divTextareaPost);
        document.querySelector('.textareaEdit').classList.remove('hide');
        
    });
    
    return container;
}
