import logo from './logo.svg';
import './App.css';

// step 1 : import getAuth and app;
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth'
import app from './Firebase/Firebase.init';
import { useState } from 'react';
const auth=getAuth(app);
function App() {

  // step:2 provider 

  const provider =new GoogleAuthProvider()
   const {user,setUSer}=useState({})

  // step :3 event handelar 
  const googleHandleSignIn=()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
      const user=result.user;
      setUSer(user);
      console.log(user);


    })
    .catch(error=>{
      console.log('error:',error);
    })
  }

  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      setUSer({});
    })
    .catch(()=>{
      setUSer({});
    })
  }
  return (
    <div className="App">
     <button onClick={googleHandleSignIn}> Sign in</button>
     <button onClick={handleSignOut} > signOut</button>
     <div>
       <h3> userName: {user.email} </h3>
     </div>
    </div>
  );
}

export default App;
