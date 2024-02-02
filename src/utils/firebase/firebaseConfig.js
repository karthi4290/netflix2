
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYim2i6Z_a8mUmSDU90pCejpdbvGE7cuY",
    authDomain: "netflix2-da27a.firebaseapp.com",
    projectId: "netflix2-da27a",
    storageBucket: "netflix2-da27a.appspot.com",
    messagingSenderId: "942881057370",
    appId: "1:942881057370:web:60f69c02613315100d8663"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();