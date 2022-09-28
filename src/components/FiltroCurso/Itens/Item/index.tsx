import cardapio from '../../../../data/itens.json';
import styles from "./item.module.css"
import { Link } from 'react-router-dom';

const stylesLink = {
  listStyle: "none",
  textDecoration: "none"
}


type Props = typeof cardapio[0];

export default function Item(props: Props) {
  const { title, description, price, photo, year, router } = props;



  return (
    <>


      <Link to={`/cursos/${router}`} style={stylesLink}>
        <div className={styles.containerCard}>

          <div className={styles.divCard_img}>
            <img src={photo} alt={title} />
          </div>
          <div className={styles.divCard_titulo}>
            <div className={styles.divCard_titulo_div_h4}>
              <h1>{title}</h1>
            </div>
            <div className={styles.divCard_titulo_div_p}>
              <p>{description}</p>
            </div>
          </div>
          <div className={styles.divCard_button}>
            <button>Valor R${price}</button>
            <button>Duração: {year} Semestres</button>
          </div>

        </div>
      </Link>
    </>
  );
}