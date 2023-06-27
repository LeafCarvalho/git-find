import styles from './input.module.css'

const Input = ({value, onChange}) => {
  return (
    <div className={styles.inputcontainer}>
          <input className={styles.input} placeholder='Digite o nome e repositório' value={value || ''} onChange={onChange}/>
    </div>
  )
}

export default Input