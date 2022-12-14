import styles from "./Cardapio.module.css";

import Buscador from "./Buscador";
import { useState } from "react";
import Itens from './Itens';
import { Box } from "@mui/material";
export default function CardapioCursos() {
  const [busca, setBusca] = useState("");

  return (
    <>

      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Nossos Graduação</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
        </div>
        <div className={styles.cardapio_container_itens}>
        <Itens busca={busca} />
        </div>
      </section>
    </>
  )
}