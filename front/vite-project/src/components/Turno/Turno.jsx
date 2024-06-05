
const Turno = ({Turno:{ id, date, time, status}}) => {
    return (
        <div>
            <h4>{id}</h4>
            <h4>{date}</h4>
            <h4>{time}</h4>
            <h4>{status}</h4>
        </div>
    )
};

export default Turno;