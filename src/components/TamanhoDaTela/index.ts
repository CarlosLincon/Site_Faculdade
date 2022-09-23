import { useWindowSize } from "usehooks-ts";

const TamanhoDaTela = () => {
  const { width } = useWindowSize();

  return width;
};

export default TamanhoDaTela;
