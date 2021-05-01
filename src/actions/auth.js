import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebaseConfig';
import Swal from 'sweetalert2';

import { types } from '../types/types';
import { finishLoading, startLoading } from './loading';




export const startGoogleLogin = () => {
  return ( dispatch ) => {

    firebase.auth().signInWithPopup( googleAuthProvider )
      .then( ({user}) => {
        dispatch(
          login( user.uid, user.displayName)
        )
        return user
      } )
      .then( (user) => {
        Swal.fire({
          title: `Bienvenido!`,
          text: `${user.displayName}`,
          icon: 'success',
          timer: 1500
  
        })
      })
  }
}
export const startFacebookLogin = () => {
  return (dispatch)  => {
  firebase
  .auth()
  .signInWithPopup(facebookAuthProvider)
  .then(({user}) => {
    dispatch(
      login( user.uid, user.displayName)
    )
    return user
  })
  .then( (user) => {
    Swal.fire({
      title: `Bienvenido!`,
      text: `${user.displayName}`,
      icon: 'success',
      timer: 1500

    })
  })
  .catch((error) => {
    
  });
}
}


export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch( startLoading() )

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        dispatch(
          login( user.uid, user.displayName)
        )
        dispatch(finishLoading())
          return user
    })
    .then( (user) => {
      Swal.fire({
        title: `Bienvenido!`,
        text: `${user.displayName}`,
        icon: 'success',
        timer: 1500

      })
    })
    .catch((e) => {
      dispatch( finishLoading() );
      Swal.fire('Error', e.message, 'error');
    });
  
  }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {    
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword( email, password )
      .then( async ({user}) => {
        await user.updateProfile({ displayName: name})
          dispatch(
            login( user.uid, user.displayName)
          )
      } )
      .catch( e => {
        Swal.fire('Error', e.message, 'error');
      }) 
  }
}


export const finishGoogleLogin = () => {
  
    firebase.auth().signOut()
    .then( () => {
      window.location.reload();
    })
    .catch((err) => {
      console.log(err)
    })
  

}
export const login = (uid, displayName) => ({
  
  type: types.login,
  payload: {  
    uid,
    displayName
}
} );