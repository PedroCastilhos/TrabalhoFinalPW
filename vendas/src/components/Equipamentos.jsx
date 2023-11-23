import { useEffect, useState } from 'react';
import { dadosEquipamentos } from '../../public/equipamentos';

function Trator() {
  const [equipamentos, setEquipamentos] = useState([]);

  useEffect(() => {
    setEquipamentos(dadosEquipamentos);
  }, []);

  const listaEquipamentos = equipamentos.map((equipamento) => (
    <>
      <h1>{equipamento.modelo}</h1>
      <img src={equipamento.foto} alt="trator1" />
      <button>Ver mais</button>
      <button>Comprar</button>
    </>
  ));

  return (
    <>
      <div>{listaEquipamentos}</div>
    </>
  );
}

export default Trator;
