import logo from './logo.svg';
import './App.css';

// step 1 : import getAuth and app;
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import app from './Firebase/Firebase.init';
const auth=getAuth(app);
function App() {

  // step:2 provider 

  const provider =new GoogleAuthProvider()

  const googleHandleSignIn=()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
      const user=result.user;
      console.log(user);


    })
    .catch(error=>{
      console.log('error:',error);
    })
  }
  return (
    <div className="App">
     <button onClick={googleHandleSignIn}> Sign in</button>
    </div>
  );
}

export default App;
