//Datos requeridos para el Register 
export const registerLog = (name, age, gender, email, password, confirmPassword) => { 
firebase.auth().createUserWithEmailAndPassword(email, password)
.then(() => {
    const db = firebase.firestore();
    db.collection("social-network").doc(email).set({
        name: name,
        age: age,
        gender: gender,
        email: email,
        password: password,
        confirm: confirmPassword,
    });
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorCode);
console.log(errorMessage);
});
};

    //Login con email y password // Inicio de sesion
    export const emailLog = (email, password) => firebase.auth()
    .signInWithEmailAndPassword(email, password);
    
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
          console.log(response);
          console.log(currentUser());
          //changeRoute('#/home');     
      }).catch((error) => {
          console.log(error); 
      });
  };