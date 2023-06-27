import styles from './repositorios.module.css'

function Repositorio({repo, remover}) {
  const removeRepository = () => {
    remover(repo.id);
};

  return (
    <div className={styles.repositoriosContainer}>
        <div className={styles.repos}>
          <img src={repo.owner.avatar_url} alt="" className={styles.img}/>
          <h2 className={styles.h2}>{repo.owner.login}</h2>
          <a href={repo.html_url} target='_blank' className={styles.a}>{repo.full_name}</a>
          
          <a href="#" onClick={removeRepository} className={styles.a}>Remover</a>
        </div>
    </div>
  )
}

export default Repositorio