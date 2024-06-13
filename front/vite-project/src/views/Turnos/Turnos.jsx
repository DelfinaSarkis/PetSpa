import { useState } from "react";
import MisTurnos from "./MisTurnos";
import Modal from "../../components/Modal/modal";
import "./Turnos.css";

const Turno = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTurno, setNewTurno] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (turno) => {
    setNewTurno(turno);
};

  return (
    <div className="turnos-container">
      <div>
        <h1 className="titulo">Turnos</h1>
        <MisTurnos newTurno={newTurno}/>
        <button className="btn-turnos" onClick={handleOpenModal}>
          Agregar Turno
        </button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Turno;