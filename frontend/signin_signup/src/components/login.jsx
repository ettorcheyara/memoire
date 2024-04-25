import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './login.css';


const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false); 
const [showSignupOptions, setShowSignupOptions] = useState(false);

const handleChange = (e) => {
const { name, value } = e.target;
if (name === "email") {
setEmail(value);
} else if (name === "password") {
setPassword(value);
}
};

const togglePasswordVisibility = () => {
setShowPassword((prevShowPassword) => !prevShowPassword);
};

const handleSubmit = (e) => {
e.preventDefault();
};

const toggleSignupOptions = () => {
setShowSignupOptions((prevShowSignupOptions) => !prevShowSignupOptions);
};

return (
<div className="login-main">
<div className="login">
<div className="login-container">
<div className="login-center">
<h2>Se connecter</h2>
<form onSubmit={handleSubmit}>
<input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
<div className="pass-input-div">
<input
type={showPassword ? "text" : "password"}
name="password"
placeholder="Mot de passe"
value={password}
onChange={handleChange}
/>
{showPassword ? (
<FaEye onClick={togglePasswordVisibility} />
) : (
<FaEyeSlash onClick={togglePasswordVisibility} />
)}
</div>


          <div className="login-center-options">
            <div className="continue-div">
              <input type="checkbox" id="continue-checkbox" />
              <label htmlFor="continue-checkbox">
                En continuant, vous acceptez les conditions d'utilisation & politique de confidentialité
              </label>
            </div>
          </div>
          <div className="login-center-buttons">
            <button type="submit">Se connecter</button>
          </div>
        </form>
      </div>
      <p className="login-bottom-p">
        Tu n'as pas de compte? 
        {}
        <a href="#" onClick={toggleSignupOptions}>Inscrivez-vous</a>
        {showSignupOptions && ( 
          <div className="signup-buttons">
            <button onClick={() => window.location.href='/inscriptionclient'}>Inscrivez-vous comme client</button>
            <button onClick={() => window.location.href='/inscriptionVendeur'}>Inscrivez-vous comme vendeur</button>
          </div>
        )}
      </p>
    </div>
  </div>
</div>
);
};

export default Login; 