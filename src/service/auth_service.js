import firebase from "firebase";
import firebaseApp from "./firebase.js";

// 로그인, 로그아웃 등 사용자 authentication 확인하는 클래스
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
