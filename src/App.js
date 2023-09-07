import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAuth, getAdditionalUserInfo, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZgj0sXaEjpd8llrlZw7TF0q3cF0Rtv18",
  authDomain: "microb-ff944.firebaseapp.com",
  projectId: "microb-ff944",
  storageBucket: "microb-ff944.appspot.com",
  messagingSenderId: "1048809673862",
  appId: "1:1048809673862:web:5875630ad9d652113d6d07"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const loguearseEnFacebook = ()=>{
  const provider = new FacebookAuthProvider();
  
  signInWithPopup(auth, provider)
    .then((result) => {
      const userInfo = getAdditionalUserInfo(result);
      console.log("loguearseEnFacebook", result);
      console.log(userInfo);
  
    })
    .catch((error) => {
      console.log(error);
  });
}

const loguearseEnGoogle = ()=>{
  const provider = new GoogleAuthProvider();
  
  signInWithPopup(auth, provider)
    .then((result) => {
      const userInfo = getAdditionalUserInfo(result);
      console.log("loguearseEnGoogle", result);
      console.log(userInfo);
  
    })
    .catch((error) => {
      console.log(error);
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={loguearseEnFacebook}>Loguear con Facebook</button>
        <button onClick={loguearseEnGoogle}>Loguear con Google</button>
      </header>
    </div>
  );
}

export default App;
