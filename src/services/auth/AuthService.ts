import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../Firebase";
export async function loginRequest(email: string, password: string) {
  try {
    const req = await signInWithEmailAndPassword(auth, email, password);
    return req;
  } catch (error) {
    throw error;
  }
}
export async function registerRequest(email: string, password: string) {
  try {
    const req = await createUserWithEmailAndPassword(auth, email, password);
    return req;
  } catch (error) {
    throw error;
  }
}
export async function logoutRequest() {
  try {
    const req = await signOut(auth);
    return req;
  } catch (error) {
    throw error;
  }
}

export function sessionRequest(): Promise<User | null> {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
}
