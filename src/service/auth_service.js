import firebase from "firebase";

// 로그인, 로그아웃 등 사용자 authentication 확인하는 클래스
class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
