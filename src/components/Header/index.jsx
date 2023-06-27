import gitLogo from '../../assets/github.png'
import styles from './header.module.css'

function Header() {
  return (
    <>
        <div className={styles.header}>
            <img src={gitLogo} width="7%" alt="Imagem do Github" />
            <h1>Github</h1>
        </div>
    </>
  )
}

export default Header