export const authen =(name, gender, mail, paswd, confirmPasw) => {
  firebase.auth().createUserWithEmailAndPassword(mail, paswd)
  .then(() => {
    const db = firebase.firestore();
    db.collection("usernew").doc(mail).set({
      name: name,
      gender: gender,
      email: mail,
      pass: paswd,
      repass: confirmPasw
    });    
  })
  .catch(function(error) {   
    const errorCode = error.code;  
    const errorMessage = error.message;   
    if (errorCode==true){
      console.log("Error de email",errorCode);
    } else{
      console.log("Error de password",errorMessage);
    }
});
};

export const loginUserRegistered =(email, paswd) => {
firebase.auth().signInWithEmailAndPassword(email, paswd)
//.then (console.log("OK"))
.catch(function(error) {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  //if (errorCode=true){
    //console.log("Error de email",errorCode);
  //} else{
    //console.log("Error de password",errorMessage);
  //}
});
}

export const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user=true) {
      console.log("Existe usuario activo")
      // User is signed in.
      const displayName = user.displayName;
      //console.log(displayName)
      const email = user.email;
      //console.log(email)
      const emailVerified = user.emailVerified;
      //console.log(emailVerified)
      const photoURL = user.photoURL;
      //console.log(photoURL)
      const isAnonymous = user.isAnonymous;
      //console.log(isAnonymous)
      const uid = user.uid;
      //console.log(uid)
      const providerData = user.providerData;
      //console.log(providerData)
      // ...
    } else {
      console.log("No existe usuario activo")
      // User is signed out.
      // ...
    }
  });
}

/*export const controlFb = () => {
    facebookLog().then((response) => {
        console.log(response);
        changeRoute('#/home');    
    }).catch((error) => {
        console.log(error);     
    });
  };

  export const controlGoogle = () => {
      googleLog().then((response) => {
          console.log(response);
          console.log(currentUser());
          changeRoute('#/home');     
      }).catch((error) => {
          console.log(error); 
      });
  };*/

  
/* export const facebookLog = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};
//Login con google
export const googleLog = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
};

// propiedad que usuario esta activo//
export const currentUser = () => firebase.auth().currentUser;
*/
