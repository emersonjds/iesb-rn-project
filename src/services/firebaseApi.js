import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDtVC3VQ1Z8XzQYDkWwnTOC_NFo8ny5c90',
  authDomain: 'todomanager-5444a.firebaseapp.com',
  databaseURL: 'https://todomanager-5444a.firebaseio.com',
  projectId: 'todomanager-5444a',
  storageBucket: 'todomanager-5444a.appspot.com',
  messagingSenderId: '254572727152',
};

export const createUserOnFirebaseAsync = async (email, password) => {
  const { user } = await firebase.auth()
    .createUserWithEmailAndPassword(email, password);
  return user;
}

export async function signInOnFirebaseAsync(email, password) {
  const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
  console.log('retorno da api USUARIO', user)
  return user;
}

export async function signOut() {
  return await firebase.signOut()
}

export const currentFirebaseUser = () => {
  return new Promise((resolve, reject) => {
    let unsubscribe = null
    unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      resolve(user)
    }, (error) => {
      reject(error)
    }, () => {
      unsubiscrible()
    })
  })
}

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}


