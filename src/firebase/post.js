
//crear post
export const savePost = (user, content, type) => firebase.firestore()
  .collection('posts')
  .add({
    uidUser: user.id,
    nameUser: user.name,
    photoUser: user.photo,
    contentPost: content,
    likes: [],
    privacity: type,
    publicationDate: new Date()
  });

  //salvar informacion del usuario
  export const saveUser = (userData) => firebase.firestore().collection('users').doc(userData.user.uid)
  .set({
    emailUser: userData.user.email,
    nameUser: (userData.user.displayName === null) ? 'Anonimo' : user.displayName,
    photoUser: (userData.user.photoURL === null) ? './image/photo.png' : user.photoURL
  });
  
  
//obtener post
export const getPost = (container) => firebase.firestore().collection('posts').orderBy('publicationDate', 'desc')
  .onSnapshot((querySnapshot) => {
    container;
    querySnapshot.forEach((post) => {
    })
  });

export const getPostById = (idPost) => firebase.firestore().collection('posts').doc(idPost).get();

//borrar post
export const deletePost = (idPost) => firebase.firestore().collection('posts').doc(idPost).delete();
// editar post
export const editPost = (idPost, newText) => firebase.firestore().collection('posts').doc(idPost).update({
  contentPost: newText,
});

export const updatePostLike = (idPost, value) => {
  firebase.firestore().collection("posts").doc(idPost).update({
    'likes': value,
  });
}

export const updatePostPrivacity = (idPost, value) => {
  firebase.firestore().collection("posts").doc(idPost).update({
    'privacity': value,
  });
}

