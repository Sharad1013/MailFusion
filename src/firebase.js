import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: your_own_api_key,
  authDomain: your_own_auth_domain,
  projectId: your_own_projectId,
  storageBucket: your_own_storageBucket,
  messagingSenderId: your_own_SenderId,
  appId: your_own_firebase_appId,
  measurementId: your_own_firebase_app_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
