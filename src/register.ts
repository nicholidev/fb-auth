import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './init';

const register = async (email: string, password: string) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;
    return user;
  } catch (e) {
    return e;
  }
};

export { register };
