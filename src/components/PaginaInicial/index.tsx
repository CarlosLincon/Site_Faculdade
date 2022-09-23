
import styles from "./PaginaInicial.module.css";
import ListaIMG from "./ListaDeImagens.json";
import TamanhoDaTela from "../TamanhoDaTela";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Stack, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const PaginaInicial = () => {
    let TamanhoTela = TamanhoDaTela();
    let TelaMinima = 800;

    const [isActive, setActive] = useState(true);


    useEffect(() => {
        if (TamanhoTela <= TelaMinima) {
            setActive(false);
        } else {
            setActive(true);
        }
    })


    return (
        <section className="container" >
            {
                isActive ? (
                    <div className={classNames({
                        [styles.grid_container_mb]: !isActive,
                        [styles.grid_container]: isActive
                    })}>
                        {ListaIMG.map(item => (
                            <div key={item.id} className={styles.grid_item}><img src={item.src} alt={item.discricao} /></div>
                        ))}

                    </div>
                ) : (
                    <div className={styles.containerGrid}>
                        <div className={styles.grid_container_mb}>
                            {ListaIMG.map(item => (
                                <div key={item.id} className={styles.grid_item_mb}><img src={item.src} alt={item.discricao} /></div>
                            ))}
                        </div>
                        <Stack spacing={2}>
                            <Pagination
                                count={ListaIMG.length}
                                renderItem={(item) => (
                                    <PaginationItem
                                        components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                        {...item}
                                    />
                                )}
                            />
                        </Stack>
                    </div>

                )
            }

        </section >

    )
}

export default PaginaInicial;