import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer }from 'redux-firestore';
//Reducers
//@todo

const firebaseConfig = {
  apiKey: "AIzaSyDUlga09tddXCMvKt1h6CepzsayD7BAZHI",
  authDomain: "reactclientpanel-2bfad.firebaseapp.com",
  databaseURL: "https://reactclientpanel-2bfad.firebaseio.com",
  projectId: "reactclientpanel-2bfad",
  storageBucket: "reactclientpanel-2bfad.appspot.com",
  messagingSenderId: "152017135517"
};

//react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

//Init firebase instance
firebase.initializeApp(firebaseConfig);
//Init firestore
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

//Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

//Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

//Create initial state
const initialState = {};

//Create store with reducers
const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;