import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "<API_KEY",
    authDomain: "<AUTH_DOMAIN>",
    databaseURL: "<DATABASE_URL>",
    projectId: "<PROJECT_ID>",
    storageBucket: "<STORAGE_BUCKET>",
    messagingSenderId: "<MESSAGING_SENDER_ID>",
    appId: "<APP_ID>"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
