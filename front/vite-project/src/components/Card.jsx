import styles from "../styles/Card.module.css"

const Card = () => {
    return (
        <div className={styles.container}>
            <h1>Tarjeta</h1>
            <h2>Nombre: Delfina Sarkis</h2>
            <p>Email:delfi@gmail.com</p>
        </div>
    )
}

export default Card;