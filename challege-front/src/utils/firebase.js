import Firebase from 'firebase'; 
import 'firebase/database';

let config = {  
    apiKey: "AIzaSyC-Om_3mDLmXDBvjtpSvQsgcFJj-qdxMMs",
    authDomain: "arquiveichallege-800fb.firebaseapp.com",
    databaseURL: "https://arquiveichallege-800fb.firebaseio.com",
    projectId: "arquiveichallege-800fb",
    storageBucket: "",
    messagingSenderId: "719192872402",
    appId: "1:719192872402:web:ee171001a8faec98"
};

let app = Firebase.initializeApp(config);  

export const db = app.database();  