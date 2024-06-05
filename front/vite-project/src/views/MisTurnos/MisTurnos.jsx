import { useState } from "react";
import turno from "../../helpers/misTurnos"
import Turno from "../../components/Turno/Turno";

const MisTurnos = () => {
    const [turnos, setTurnos] = useState(turno);
setTurnos;
    return (
        <>
        <h1>MIS TURNOS</h1>
        <h3>Estos son los turnos del usuario</h3>

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