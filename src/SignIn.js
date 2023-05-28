import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index";
import React from "react";

const SignIn = () => {
    const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);
    const handleButtonClick = () => {
        setIsAlertVisible(true);
        setTimeout(() => {
           setIsAlertVisible(false);
        }, 2000);
    }
    return(
        <div className="signin">
            <h1>Sign-in</h1>
            <form className="form2">
                <label className="fields">Enter your username: </label>
                <input
                autoComplete="off" type="text" required>
                </input>
                <label className="fields">Enter your password:</label>
                <input className="last"
                autoComplete="off" type="password" required>
                </input>
                <button type="submit" onClick={handleButtonClick}>Register</button>
                {isAlertVisible && <div className='alert-container'>
                    <div className='alert-inner'>Sign in complete</div>
                </div>}
                <Link to="/signup">New to the blogging?</Link>

            </form>
        </div>
    );
}
 
export default SignIn;