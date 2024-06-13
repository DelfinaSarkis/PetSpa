import { useEffect,useState } from "react";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";
import axios from "axios";
import { useSelector } from "react-redux";

const MisTurnos = ({ newTurno }) => {
    const [turnos, setTurnos] = useState([]);
    const userId = useSelector((state) => state.user);
    const turnosRedux = useSelector((state) => state.userAppointments)
    console.log(turnosRedux)

useEffect(()=>{
    const fetchAppointments = async() =>{
    try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        setTurnos(response.data.Turn);
    } catch (err) {
        console.log(err);
    }
};
fetchAppointments();
}, [userId, turnosRedux]);

    if (!turnos.length){
        return <div style={{color: 'black'}}>No tienes turnos agendados</div>;
    }

    return (
        <div className={styles.turnosContainer}>
            {turnos.length ? ( 
            turnos.map((turno) =>( 
                <Turno key={turno.id} turno={turno} />
            ))
            ) : (
                <div>No tienes turnos agendados.</div>
            )}
        </div>
    );
};

export default MisTurnos;