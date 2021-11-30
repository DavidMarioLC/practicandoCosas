import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js';

export const auth = getAuth();
auth.languageCode = 'es';

//instance google provider
const provider = new GoogleAuthProvider();

async function login() {
  try {
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

async function logout() {
  try {
    const response = await auth.signOut();
    console.log('sesión cerrada.');
  } catch (error) {
    console.log(error);
  }
}

export default {
  login,
  logout,
  auth,
  onAuthStateChanged,
};
