import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXiW17TbtTzJsu_FZxVMjwxArG8leUvYc",
  authDomain: "herpe-10524.firebaseapp.com",
  projectId: "herpe-10524",
  storageBucket: "herpe-10524.appspot.com",
  messagingSenderId: "55245273928",
  appId: "1:55245273928:web:55f47c76a3c515238ed17d",
  measurementId: "G-3W61KH66CX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
