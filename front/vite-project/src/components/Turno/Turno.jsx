import './Turno.css';

const Turno = ({Turno:{ id, date, time, status}}) => {
    return (
        <div className='turno-card'>
            <h4 className='turno-id'>{id}</h4>
            <h4 className='turno-date'>{date}</h4>
            <h4 className='turno-time'>{time}</h4>
            <h4 className='turno-status'>{status}</h4>
        </div>
    );
};

export default Turno;