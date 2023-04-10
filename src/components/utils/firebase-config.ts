import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA2hJV88vjM0D7sgJUExigozZwj_psJA80",
  authDomain: "mohameto-ddd57.firebaseapp.com",
  projectId: "mohameto-ddd57",
  storageBucket: "mohameto-ddd57.appspot.com",
  messagingSenderId: "1017521426937",
  appId: "1:1017521426937:web:878a97ccde559c832eed28",
  measurementId: "G-MXFSHVXHF7",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
