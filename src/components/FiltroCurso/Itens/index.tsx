import cardapio from '../../../data/itens.json';
import Item from './Item';
import { useState, useEffect } from "react";

interface Props {
  busca: string
}








export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  const { busca } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }


  useEffect(() => {
    const novaLista = cardapio.filter(item => testaBusca(item.title));
    setLista(novaLista);
  }, [busca])

  return (
    < >
      {lista.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </>
  )
}

