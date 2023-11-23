import { useEffect, useState } from 'react';
import { dadosEquipamentos } from '../../public/equipamentos';
import Swal from 'sweetalert2';

function Trator() {
  const [equipamentos, setEquipamentos] = useState([]);

  function mostraDetalhes(modelo, descricao) {
    Swal.fire({
      title: modelo,
      text: descricao,
      footer: 'Você não vai se arrepender dessa compra!',
    });
  }

  useEffect(() => {
    setEquipamentos(dadosEquipamentos);
  }, []);

  const listaEquipamentos = equipamentos.map((equipamento) => (
    <>
      <h1>{equipamento.modelo}</h1>
      <img src={equipamento.foto} alt="trator1" />
      <button
        onClick={() =>
          mostraDetalhes(equipamento.modelo, equipamento.descricao)
        }
      >
        Detalhes
      </button>
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
