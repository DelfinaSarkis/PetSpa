import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validateRegister from "../../helpers/validateRegister";
import axios from 'axios';

function Register() {
const navigate = useNavigate();
const [userData, setUserData] = useState({
    name: '',
    email: '',
    birthdate: '',
    nDni: '',
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

    setErrors(validateRegister({...userData, [name]: value}));
};

const handleOnSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateRegister(userData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0){
        try{
            const response = axios.post('http://localhost:3000/users/register', {
                name: userData.name,
                email: userData.email,
                birthdate: userData.birthdate,
                nDni: userData.nDni,
                username: userData.username,
                password: userData.password
            });
            setMessage('Registro exitoso');
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
    <form onSubmit={handleOnSubmit}>
    <h2>REGISTER</h2>
    {message && <p>{message}</p>}
    <div>
        <label>Name: </label>
        <input 
        type="text"
        value={userData.name}
        name="name"
        onChange={handleInputChange} 
        />
        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
    </div>
    <div>
        <label>Email: </label>
        <input 
        type="email"
        value={userData.email}
        name="email"
        onChange={handleInputChange} 
        />
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
    </div>
    <div>
        <label>Birthdate: </label>
        <input 
        type="date"
        value={userData.birthdate}
        name="birthdate"
        onChange={handleInputChange} 
        />
        {errors.birthdate && <p style={{color: 'red'}}>{errors.birthdate}</p>}
    </div>
    <div>
        <label>Dni: </label>
        <input 
        type="number"
        value={userData.nDni}
        name="nDni"
        onChange={handleInputChange} 
        />
        {errors.nDni && <p style={{color: 'red'}}>{errors.nDni}</p>}
    </div>
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
    <button type="submit" disabled={!userData.name || !userData.email || !userData.birthdate || !userData.nDni || !userData.username || !userData.password || Object.keys(errors).length > 0}>Submit</button>
    </form>
)
}

export default Register;