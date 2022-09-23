
import styles from "./PaginaInicial.module.css";
import ListaIMG from "./ListaDeImagens.json";
import TamanhoDaTela from "../TamanhoDaTela";
import { useEffect, useState } from "react";




const PaginaInicial = () => {
    let TamanhoTela = TamanhoDaTela();
    let TelaMinima = 800;

    const [isActive, setActive] = useState(true);


    const toggleClass = () => {
        setActive(!isActive);
    };

    useEffect(() => {
        if (TamanhoTela <= TelaMinima) {
            setActive(false)
        } else {
            setActive(true)
        }
    })


    return (
        <section className={styles.container} >
            {
                isActive ? (
                    <div className={styles.grid_container}>
                        {ListaIMG.map(item => (
                            <div key={item.id} className={styles.grid_item}><img src={item.src} alt={item.discricao} /></div>
                        ))}
                    </div>
                ) : (
                    <p></p>
                )
            }

        </section >

    )
}

export default PaginaInicial;