import { useState } from "react";
import ISlide from "../../interfaces/ISlide";
import styles from "./Slider.module.css"
import classNames from "classnames";

interface Props {

  slider: ISlide[];
}


const Slider = ({ slider }: Props) => {

  const [indexAtual, setIndexAtual] = useState(0);

  let ButtonSlideCont: number;

  const goToSlide = (slideIndex: number) => {


    setIndexAtual(slideIndex);

  };





  return (



    <div className={styles.container_slider}>

      <div className={styles.container_slider_image}>

        <img src={slider[indexAtual].src} alt={slider[indexAtual].descricao} />

      </div>
      <div className={styles.container_slider_opcao_slide}>
        {slider.map((slide, index) => (
          <div className={classNames({
            [styles.div_opcao_slide]: true,
            [styles.div_opcao_slide_ativo]: indexAtual === index,

          })}
            key={index}
            onClick={() => goToSlide(index)}
          >
            {ButtonSlideCont = index + 1}
          </div>

        ))}
      </div >




    </div >
  )
};

export default Slider;