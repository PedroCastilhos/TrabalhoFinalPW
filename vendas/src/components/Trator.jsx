import { useEffect, useState } from 'react';
import { dadosTratores } from '../../public/tratores';

function Trator() {
  const [tratores, setTratores] = useState([]);

  useEffect(() => {
    setTratores(dadosTratores);
  }, []);

  const listaTratores = tratores.map((trator) => (
    <>
      <h1>{trator.modelo}</h1>
      <img src={trator.foto} alt="trator1" />
      <button>Ver mais</button>
      <button>Comprar</button>
    </>
  ));

  return (
    <>
      <div>{listaTratores}</div>
    </>
  );
}

export default Trator;
