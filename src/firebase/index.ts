import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./config";

let auth, firestore, storage;

// Only initialize Firebase if all config values are provided, to prevent build errors.
if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    firestore = getFirestore(app);
    storage = getStorage(app);
}

export { auth, firestore, storage };
