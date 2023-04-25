import React from 'react';
import '../../CSS/Login.css';

const Login = () => {
  return (
    <>
      <div class="imgBx">
      
        <img className="logo" src={require("../../Assest/Login.png")} />
      
        <div class="contentbx">
          <div class="formBx">
            <h2>Login</h2>
            <form>
              <div class="inputBx">
                <span> Username </span>
                <input type="text" name=""></input>
              </div>
              <div class="inputBx">
                <span> Password </span>
                <input type="password" name=""></input>
              </div>
              
              <div class="inputBx">
                <span> Password </span>
                <input type="Submit" value="Sign in" name=""></input>
              </div>
              <div class="inputBx">
              <p className="forgot-password text-right">
            Don't have an account? <a href="/signup">Sign up</a>
            </p>
              </div>
            </form>
            {/* <h3> Login with social media</h3>
            <ul class="sci">
              <li> <img src="facebook.png" alt="facebook icon"/></li>
              <li><img src="twitter.png" alt="twitter icon"/></li>
              <li><img src="instagram.png" alt="instagram icon"/></li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
