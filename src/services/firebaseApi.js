import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDtVC3VQ1Z8XzQYDkWwnTOC_NFo8ny5c90",
  authDomain: "todomanager-5444a.firebaseapp.com",
  databaseURL: "https://todomanager-5444a.firebaseio.com",
  projectId: "todomanager-5444a",
  storageBucket: "todomanager-5444a.appspot.com",
  messagingSenderId: "254572727152",
};

export const createUserOnFirebaseAsync = async (email, password) => {
  const { user } = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  return user;
};

export async function signInOnFirebaseAsync(email, password) {
  const { user } = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  console.log("retorno da api USUARIO", user);
  return user;
}

export async function signOut() {
  return await firebase.signOut();
}

export const currentFirebaseUser = () => {
  return new Promise((resolve, reject) => {
    let unsubscrible = null;
    unsubscrible = firebase.auth().onAuthStateChanged(
      user => {
        resolve(user);
      },
      error => {
        reject(error);
      },
      () => {
        unsubscrible();
      },
    );
  });
};

export const writeTaskOnFirebaseAsync = async task => {
  const user = await currentFirebaseUser();
  const tasksReference = firebase.database().ref(user.uid);
  const key = task.key ? task.key : tasksReference.child("tasks").push().key;
  return await tasksReference.child(`tasks/${key}`).update(task);
};

export const readTaskFromFirebaseAsync = async (listener) => {
  const user = await currentFirebaseUser();
  const tasksReference = firebase.database()
    .ref(user.uid)
    .child("tasks");
  tasksReference
    .on("value", (snapshot) => {
      const tasks = [];
      snapshot.forEach(function(element) {
        const task = element.val();
        task.key = element.key;
        tasks.push(task);
      });
      listener(tasks);
    });
};

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};
