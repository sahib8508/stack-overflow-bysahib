import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC0tAyA-lmsYIJa2VuNkH4A8-9NakLIIA",
  authDomain: "phone-auths-5c28a.firebaseapp.com",
  projectId: "phone-auths-5c28a",
  storageBucket: "phone-auths-5c28a.appspot.com",
  messagingSenderId: "836913622157",
  appId: "1:836913622157:web:c5418cd3336d18defac6c4"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;