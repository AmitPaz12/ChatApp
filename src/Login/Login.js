import React, {useState, useEffect, useContext} from 'react';
import "./Login.css";
import { Link } from "react-router-dom";
import { UserContext } from '../UserContext'
import { usersDB } from '../Main/ContactsDB'

function Login() {

	const verifyUser = (isUserName, isPassword) => {
		return usersDB.find((element) => {
			return (element.userName === isUserName && element.password === isPassword);
		});
	}

  const correctInput = (isUserName, isPassword) => {
		return usersDB.find((element) => {
			return (element.userName === isUserName && element.password == isPassword);
		});
	}

  const isUserExists = (isUserName) => {
    console.log(isUserName);
		return usersDB.find((element) => {
			return (element.userName === isUserName);
		});
	}
  
	
  // will hold the data of the user
	const [fieldData, setFieldData] = useState({userField: '', passwordField: ''});

  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  // create the uset holder
	const {user, setUser} = useContext(UserContext);

	
  // function for handling the changed of the data when enterd the username & password
	const handleChange = (e) => {
    if (fieldErrors !== ""){
      setFieldErrors("");
      setIsSubmit(false);
    }
		const {name, value} = e.target;
		setFieldData({...fieldData, [name]: value});
	}

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  }
  
  // handle submiting, click on Login
	const handleSubmit = () => {
    setFieldErrors(validate(fieldData));
    setIsSubmit(true);
	}

  useEffect(() => {
    if(Object.keys(fieldErrors).length === 0 && isSubmit){
      const userExists = verifyUser(fieldData.userField, fieldData.passwordField);
			if (userExists){
				setUser(userExists);
			}
    }
  },[fieldErrors])
  
  const validate = (values) => {
    const errors = {}
    if(!values.userField || !values.passwordField){
      if (!values.userField){
        errors.userField = "Username is required!";
      }
      if (!values.passwordField){
        errors.passwordField = "Password is required!";
      }
    } else if (isUserExists(fieldData.userField) && !correctInput(fieldData.userField, fieldData.passwordField)){
      errors.wrongPassword = "Sorry, your password was incorrect. Please double-check your password.";
    }  else if(!correctInput(fieldData.userField, fieldData.passwordField)){
      errors.wrongUserName = "Username or password is wrong! Try again";
    } 
    return errors;
  }

  return (
    <div className="login">
      <div className="login-container">
        <img src="https://zeevector.com/wp-content/uploads/pink-whatsapp-icon_png__Zeevector.com_.png" alt=""/>
        <div className="login-text">
            <h1>Welcome to TalkApp</h1>
        </div>
        
        <div className="login-connect">
            <input placeholder="USERNAME" onKeyPress={handleEnter} name="userField" type="text" value={fieldData.userField} onChange={handleChange}/>
      </div>
        
      <p>{fieldErrors.userField}</p>
        
      <div className="login-connect">
        <input placeholder="PASSWORD" onKeyPress={handleEnter} name="passwordField" type="password" value={fieldData.passwordField} onChange={handleChange} />
      </div>
        
      <p>{fieldErrors.passwordField}</p>
      <h1>{fieldErrors.wrongPassword}</h1>
      <h1>{fieldErrors.wrongUserName}</h1>
        
        <button onClick={handleSubmit}> Login </button>
        <div class="K-1uj hKTMS">
          <div class="s311c"></div>
          <div class="_0tv-g">OR</div>
          <div class="s311c"></div>
        </div>
        
        <div className="login-signUp">
            <h5>Don't have an account? </h5>
            <Link to="/register">
              <div className="link-signUp">Sign up</div>
            </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Login
