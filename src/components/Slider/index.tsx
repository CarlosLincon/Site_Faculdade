import { useState } from "react";
import ISlide from "../../interfaces/ISlide";
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { padding } from "@mui/system";
import styles from "./Slider.module.css"
interface Props {

  slider: ISlide[];
}



const Slider = ({ slider }: Props) => {

  const [indexAtual, setIndexAtual] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = indexAtual === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : indexAtual - 1;
    setIndexAtual(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    console.log(slideIndex);
    setIndexAtual(slideIndex);
  };




  return (



    <div className={styles.container_slider}>

      <div className={styles.container_slider_image}>
        <img src={slider[indexAtual].src} alt={slider[indexAtual].descricao} />
      </div>
      <div className={styles.container_slider_opcao_slide}>
        {slider.map((slide, index) => (
          <div className={styles.div_opcao_slide}
            key={index}
            onClick={() => goToSlide(index)}
          >
            ●
          </div>

        ))}
      </div >




    </div >
  )
};

export default Slider;