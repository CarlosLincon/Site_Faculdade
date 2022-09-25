
import estilos from './Rodape.module.css';

const NavBar = () => {
  return (
    <footer className={estilos.Rodape}>
      <div>
        <h1>Apoiadores</h1>
        <ul className="social-icons">
          <li><img src="" alt="" /></li>
        </ul>
      </div>
      <div>
        <p>Copyright &copy; {new Date().getFullYear()} Todos os direitos reservados à Faculdade Santíssimo Sacramento</p>
      </div>


    </footer>)
}

export default NavBar