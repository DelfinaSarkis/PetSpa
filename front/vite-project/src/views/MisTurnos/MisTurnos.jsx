import { useEffect, useState } from "react";
import Turno from "../../components/Turno/Turno";
import styles from "../MisTurnos/MisTurnos.module.css";
import axios from "axios";


const MisTurnos = () => {
    const [turnos, setTurnos] = useState([]);
setTurnos;

    useEffect(() => {
        axios.get("http://localhost:3000/appointments").then((res) => setTurnos(res.data))
        .then((res) => {
            setTurnos(res.data);
        })
        .catch((error) => {
            console.log("Error al obtener los turnos", error);
        });
    }, []);
    return (
        <>
        <h1 className={styles.title}>MIS TURNOS</h1>

        <div>
            {
                turnos.map((turno) =>{
                    return <Turno key={turno.id} Turno={turno} />;
                })
            }
        </div>
        </>
    );
};

export default MisTurnos;