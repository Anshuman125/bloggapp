import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SignUp = () => {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [phone, setPhone]=useState('');
    const history = useHistory(); 
    const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);
    const handleButtonClick = () => {
        setIsAlertVisible(true);
        setTimeout(() => {
           setIsAlertVisible(false);
        }, 2000);
    }

    // const handleInput=(e)=>{
    //     const name=e.target.name;
    //     const value=e.target.value;
    //     setUserRegistration({...userRegistration,[name]:value})
    // }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const reg= {name, email, password, phone}

        fetch('http://localhost:8001/reg',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(reg)
        }).then(()=>{
            history.push('/');
        });
    }

    return (
        <div className="signup">
            <h1>Sign-up</h1>
            <form className="form2" onSubmit={handleSubmit}>
                <label className="fields">Enter a username: </label>
                <input value={name}
                onChange={(e)=>setName(e.target.value)} 
                autoComplete="off" type="text" required>
                </input>
                <label className="fields">Enter an e-mail address: </label>
                <input value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                autoComplete="off" type="text" required>
                </input> 
                <label className="fields">Create a password:</label>
                <input value={password}
                onChange={(e)=>setPassword(e.target.value)} 
                autoComplete="off" type="password" required>
                </input>
                <label className="fields">Enter your phone number:</label>
                <input className="last" value={phone}
                onChange={(e)=>setPhone(e.target.value)} 
                autoComplete="off" type="number" required>
                </input>
                <button type="submit" onClick={handleButtonClick}>Register</button>
                {isAlertVisible && <div className='alert-container'>
                    <div className='alert-inner'>Registration complete</div>
                </div>}
                <Link to="/signin">Already a Blogger here?</Link>

            </form>
        </div>
    );
}
 
export default SignUp;