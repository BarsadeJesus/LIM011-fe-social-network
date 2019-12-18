//Datos requeridos para el Register 
export const registerLog = (register) => { 
    console.log(register.name);
firebase.auth().createUserWithEmailAndPassword(register.email, register.password)
.then((response) => {
    console.log(response.user.uid);
    createUserCollection(register, response.user.uid);
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorCode);
console.log(errorMessage);
});
};

const createUserCollection = (register, id) => {
    firebase.firestore().collection("users").doc(id).set({
      name: register.name,
      email: register.email,
  });
}

const createUserCollection2 = (register, id) => {
    firebase.firestore().collection("usersGoogle").doc(id).set({
      name: register.name,
      email: register.email,
  });
}


//Login con email y password // Inicio de sesion
export const emailLog = (email, password) => { firebase.auth()
.signInWithEmailAndPassword(email, password);
}
    
//Login con facebook
const facebookLog = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};
//Login con google
const googleLog = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

// propiedad que usuario esta activo//
const currentUser = () => firebase.auth().currentUser;



  //Si deseamos cerrar sesion 
  //const loginOut = () => firebase.auth().signOut();

// propiedad que usuario esta activo//
//const currentUser = () => firebase.auth().currentUser;


export const controlFb = () => {
    facebookLog().then((response) => {
        console.log(response);
        //changeRoute('#/home');    
    }).catch((error) => {
        console.log(error);     
    });
  };

  export const controlGoogle = () => {
      googleLog().then((response) => {
          console.log(response)
          const register = {
              name: response.diplayname,
              email: response.email,
          }
          createUserCollection2(register, response.user.uid)
          //changeRoute('#/home');     
      }).catch((error) => {
          console.log(error); 
      });
  };