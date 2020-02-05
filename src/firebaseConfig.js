import * as firebase from "firebase/app";
import "firebase/auth"

const app= firebase.initializeApp({
    apiKey: "AIzaSyDfxwPtLxXROCjfRggoAQ2B3Ouq8qB81yk",
    authDomain: "volunteering-ab0df.firebaseapp.com",
    databaseURL: "https://volunteering-ab0df.firebaseio.com",
    projectId: "volunteering-ab0df",
    storageBucket: "volunteering-ab0df.appspot.com",
    messagingSenderId: "102472724626",
    appId: "1:102472724626:web:e70b54a0fc2f0890c0364b",
    measurementId: "G-W36WEW6WT6"
});

export default app;