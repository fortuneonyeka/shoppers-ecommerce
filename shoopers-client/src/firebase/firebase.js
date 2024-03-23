import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHX2si6wEIsA9p7xDF1DU6mhVkFgUEf8I",
  authDomain: "shoppers-app-f8e4e.firebaseapp.com",
  projectId: "shoppers-app-f8e4e",
  storageBucket: "shoppers-app-f8e4e.appspot.com",
  messagingSenderId: "520044482074",
  appId: "1:520044482074:web:afdb5516cc27408afacba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}