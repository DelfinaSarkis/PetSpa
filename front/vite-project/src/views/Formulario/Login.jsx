import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validateLogin from "../../helpers/validateLogin";
import axios from 'axios';

function Login() {
const navigate = useNavigate();
const [userData, setUserData] = useState({
    username: '',
    password: ''
});

const [errors, setErrors] = useState({});
const [message, setMessage] = useState('');

const handleInputChange = (event) => {
    const {name, value} = event.target;

    setUserData({
    ...userData,
    [name]: value
    });

    setErrors(validateLogin({...userData, [name]: value}));
};

const handleOnSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateLogin(userData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0){
        try{
            const response = axios.post('http://localhost:3000/users/login', {
                username: userData.username,
                password: userData.password
            });
            setMessage('Login exitoso');
            console.log(response.data);
            }catch (error){
        if(error.response){
            setMessage(`Error: ${error.response.data.message}`);
        } else {
            setMessage(`Error: ${error.message}`);
        }
    }
    }else {
        setMessage('Por favor, complete todos los campos correctamente.');
    }
    navigate("/home");
};

return (
    <form onSubmit={handleOnSubmit} className="login">
    <h2>LOGIN</h2>
    {message && <p>{message}</p>}
    <div>
    <label>Username: </label>
    <input 
    type="text"
    value={userData.username}
    name="username"
    onChange={handleInputChange}
    />
    {errors.username && <p style={{color: 'red'}}>{errors.username}</p>}
    </div>
    <div>
    <label>Password: </label>
    <input 
    type="password"
    value={userData.password}
    name="password"
    onChange={handleInputChange}
    />
    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
    </div>
    <button type="submit">Submit</button>
    </form>
);
}

export default Login;
