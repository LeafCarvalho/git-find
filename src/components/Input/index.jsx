import styles from './input.module.css';

const Input = ({ nameValue, repoValue, onNameChange, onRepoChange }) => {
  return (
    <div className={styles.inputcontainer}>
      <input className={styles.input} placeholder="Digite o nome do usuário" value={nameValue || ''} onChange={onNameChange} />
      <input className={styles.input} placeholder="Digite o repositório" value={repoValue || ''} onChange={onRepoChange} />
    </div>
  );
};

export default Input;
