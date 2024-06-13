import { useState } from "react";
import "./modal.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addAppointments } from "../../redux/reducer";

const Modal = ({ isOpen, onClose, onSubmit }) => {

const [date, setDate] = useState("");
const [time, setTime] = useState("");
const userId =  useSelector((state) => state.user);
const dispatch = useDispatch();

const validateForm = () => {
    return date !== "" && time !== "";
};

const isValidTime = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours > 9 || (hours === 9 && minutes >= 0)) && (hours < 18 || (hours === 18 && minutes === 0));
};

const isNotPastDate = () => {
    const selectedDate = new Date(date);
    const today = new Date();
    return selectedDate >= today;
};

const isDateWithinYear = () => {
    const selectedDate = new Date(date);
    const today = new Date();
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(today.getFullYear() + 1);
    return selectedDate <= oneYearFromNow;
};

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!isValidTime(time)) {
        alert("Por favor, selecciona una hora dentro del horario comercial (9:00 - 18:00).");
        return;
    }

    if (!isNotPastDate()) {
        alert("Por favor, selecciona una fecha que no sea anterior a hoy.");
        return;
    }

    if (!isDateWithinYear()) {
        alert("Por favor, selecciona una fecha dentro del próximo año.");
        return;
    }

    try {
        const response = await axios.post('http://localhost:3000/appointments/schedule', {
            date: date,
            time: time,
            userId: userId
        });

        dispatch(addAppointments(response.data));
        console.log(response.data);

        onSubmit({ date, time });

        onClose();
    } catch (err) {
        console.log(err);
        alert("Error al programar el turno. Por favor, inténtalo nuevamente.");
    }
};

if (!isOpen) return null;

return (
    <div className="modal-overlay">
    <div className="modal">
        <button className="close-btn" onClick={onClose}>
        Cerrar
        </button>
        <h2>Agendar Turno</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
        <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
        />
        <button type="submit">Agendar</button>
        </form>
    </div>
    </div>
);
};

export default Modal;