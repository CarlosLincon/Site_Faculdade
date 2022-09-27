
import styles from "./PaginaInicial.module.css";
import ListaIMG from "../../ListaDeImagens.json";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import JanelaModal from "./JanelaModal";
import SantissimoAcontece from "../SantissimoAcontece";
import CardapioCursos from "../FiltroCurso";
import { Card } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const IFrameDivStyle = {
    width: "100%",
    height: "100%"
}

const IFrameStyle = {
    width: "100%",
    height: "100%",
    margin: 0,
}


const PaginaInicial = () => {
    const routePath = useLocation();
    const onTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        onTop()
    }, [routePath]);

    return (
        <section className={styles.container} >

            <JanelaModal />

            <Carousel className={styles.main_slide} showStatus={false} infiniteLoop={true} interval={3000} autoPlay={true} showArrows={false} showThumbs={false} stopOnHover={true}>
                {ListaIMG.map(item => (
                    item.Tipo === 0 ? (
                        <div key={item.id}>
                            <img src={item.src}
                                alt={item.descricao} /></div>
                    ) : (
                        <div key={item.id} style={IFrameDivStyle} >
                            <iframe style={IFrameStyle} title={item.descricao} src={item.src}
                            > </iframe></div>
                    )
                ))}
            </Carousel>

            <SantissimoAcontece />

            <CardapioCursos />

        </section >

    )
}

export default PaginaInicial;