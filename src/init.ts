import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

type FirebaseConfig = {
  apiKey: string;
  authDomain?: string;
  databaseURL?: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  measurementId?: string;
};

let firebaseConfig: FirebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

const initAuth = (config: FirebaseConfig) => {
  firebaseConfig = {
    ...config,
  };
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { initAuth, auth };
