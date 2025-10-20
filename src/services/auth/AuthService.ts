import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
