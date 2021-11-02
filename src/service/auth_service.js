import firebase from "firebase";
import firebaseApp from "./firebase.js";

// 로그인, 로그아웃 등 사용자 authentication 확인하는 클래스
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    // auth state가 변경된다면 인자로 들어간 콜백함수를 호출함
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
