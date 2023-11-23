import { useEffect, useState } from 'react';
import { dadosEquipamentos } from '../../public/equipamentos';
import Swal from 'sweetalert2';
import './styles/styleEquipamentos.css';

function Equipamentos() {
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
    <div className="test" key={equipamento.id}>
      <h1>{equipamento.modelo}</h1>
      <div>
        <img src={equipamento.foto} alt="trator1" />
        <div>
          <button
            onClick={() =>
              mostraDetalhes(equipamento.modelo, equipamento.descricao)
            }
          >
            Detalhes
          </button>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div>{listaEquipamentos}</div>
    </div>
  );
}

export default Equipamentos;
