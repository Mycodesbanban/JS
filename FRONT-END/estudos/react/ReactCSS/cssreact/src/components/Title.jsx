import styles from "./Title.module.css"

const Title = () => {
  return (
    <div>
       <h1 className={styles.my_title}>Meu título</h1> 
       {/* usamos o estilo em forma de objeto em js  */}
    </div>
  )
}

export default Title