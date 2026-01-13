
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEhtCzT3MVdPrgT_fcsLDR04CeWSVSMrg",
  authDomain: "mini-blog-bfbcd.firebaseapp.com",
  projectId: "mini-blog-bfbcd",
  storageBucket: "mini-blog-bfbcd.firebasestorage.app",
  messagingSenderId: "804134766154",
  appId: "1:804134766154:web:96d2009a4457b2c01888b3"
};


const app = initializeApp(firebaseConfig);

const database= getFirestore(app)
const auth = getAuth(app);

export {database ,auth};
export default app