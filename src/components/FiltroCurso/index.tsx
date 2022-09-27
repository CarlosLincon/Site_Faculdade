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
        <h3 className={styles.cardapio__titulo}>Cursos do Santissimo</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
        </div>
        <Box sx={{
          display: "grid",
          grid: "auto/auto auto auto",
          gridGap: "10px", marginBottom:"90px"
        }}>
          <Itens busca={busca} />
        </Box>
      </section>
    </>
  )
}