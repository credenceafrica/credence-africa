import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { firebaseConfig } from "./config";

let auth: Auth | undefined;
let firestore: Firestore | undefined;
let storage: FirebaseStorage | undefined;

// Only initialize Firebase if all config values are provided, to prevent build errors.
if (firebaseConfig.apiKey && firebaseConfig.projectId) {
    const apps = getApps();
    // Explicitly check for the default app to avoid conflicts with named apps
    const existingApp = apps.find(app => app.name === '[DEFAULT]');
    const app = existingApp || initializeApp(firebaseConfig);
    
    auth = getAuth(app);
    firestore = getFirestore(app);
    storage = getStorage(app);
}

export { auth, firestore, storage };
