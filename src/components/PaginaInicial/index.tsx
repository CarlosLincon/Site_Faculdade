
import styles from "./PaginaInicial.module.css";
import ListaIMG from "./ListaDeImagens.json";




const PaginaInicial = () => {

    return (

        <section className={styles.container}>
            <div className={styles.grid_container}>
                {ListaIMG.map(item => (
                    <div key={item.id} className={styles.grid_item}><img src={item.src} alt={item.discricao} /></div>
                ))}
            </div>
        </section>

    )
}

export default PaginaInicial;