import styles from './button.module.css';

const Button = ({onClick}) => {

  return (
    <div className={styles.container}>
        <button onClick={onClick} className={styles.button}>Pesquisar Repositório</button>
    </div>
  )
}

export default Button