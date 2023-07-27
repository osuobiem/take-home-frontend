import {initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const app = initializeApp({
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
});

export const login = (email: string, password: string) => {
  const auth = getAuth(app);

  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
      throw new Error(err.message);
    });
};
