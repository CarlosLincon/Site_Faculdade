
import styles from './Rodape.module.css';
import apoiadores from "./Apoiadores.json"
const NavBar = () => {
  return (
    <footer className={styles.Rodape}>
      <nav>
        <h1>Apoiadores</h1>
        <ul className={styles.social_icons}>
          {apoiadores.map((apoiador) => (

            <li key={apoiador.id}>
            
              <img key={apoiador.id} src={apoiador.src} alt={apoiador.descricao} />

            </li>

          ))}
        </ul>
      </nav>
      <div>
        <p>Copyright &copy; {new Date().getFullYear()} Todos os direitos reservados à Faculdade Santíssimo Sacramento</p>
      </div>


    </footer>)
}

export default NavBar