import styles from "./Car.module.css"

const DetalhesCar = ({car}) => {
  return (
    <div className={styles.card}>
        <h2>nome:{car.name}</h2>
        <p>valor:{car.value}</p>
    </div>
  )
}

export default DetalhesCar