import './Turno.css';
import axios from 'axios';
import {useState} from "react";

const Turno = ({turno:{ id, date, time, status}}) => {
    console.log(id);

    const handlerCancelButton = async () => {
        await axios.put(`http://localhost:3000/appointments/cancel/${id}`).then((res) => {console.log(res.data)}).catch((err) => {console.log(err)});

        setTurnStatus("cancelled");
}

const [turnStatus, setTurnStatus] = useState(status);

    return (
        <div className='turno-card'>
            <h4 className='turno-id'>ID: {id}</h4>
            <h4 className='turno-date'>FECHA: {date}</h4>
            <h4 className='turno-time'>HORA: {time}</h4>
            <h4 className={`turno-status ${turnStatus}`} disabled={turnStatus === "cancelled"}>{turnStatus}</h4>
            <button className="boton" onClick={handlerCancelButton}>Cancelar Turno</button>
        </div>
    );
};

export default Turno;