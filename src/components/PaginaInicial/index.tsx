
import styles from "./PaginaInicial.module.css";
import ListaIMG from "../../ListaDeImagens.json";
import TamanhoDaTela from "../TamanhoDaTela";
import { useEffect, useState } from "react";
import classNames from "classnames";
import Slider from "../Slider";


const PaginaInicial = () => {


    let TamanhoTela = TamanhoDaTela();
    let TelaMinima = 1023;

    const [isActive, setActive] = useState(true);


    useEffect(() => {
        if (TamanhoTela <= TelaMinima) {
            setActive(false);
        } else {
            setActive(true);
        }

    },[TamanhoTela,TelaMinima])



    return (
        <section className={styles.container} >
            {
                isActive ? (
                    <div className={classNames({
                        [styles.grid_container_mb]: !isActive,
                        [styles.grid_container]: isActive
                    })}>
                        {ListaIMG.map(item => (
                            <div key={item.id}
                                className={styles.grid_item}>
                                <img src={item.src}
                                    alt={item.descricao} /></div>
                        ))}

                    </div>
                ) : (
                    <>


                        <Slider slider={ListaIMG} />


                    </>

                )
            }

        </section >

    )
}

export default PaginaInicial;