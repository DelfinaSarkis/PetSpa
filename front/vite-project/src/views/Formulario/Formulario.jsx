import Login from "./Login";
import Register from "./Register";
import "./Formulario.css"

const Formulario = () => {
    return(
        <div className="form-container">
        <Login/>
        <Register/>
    </div> 
    );
}

export default Formulario;