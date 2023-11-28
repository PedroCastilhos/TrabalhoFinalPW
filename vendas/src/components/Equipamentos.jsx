import { useEffect, useState } from 'react';
import { dadosEquipamentos } from '../../public/equipamentos';
import Swal from 'sweetalert2';
import './styles/styleEquipamentos.css';

function Equipamentos() {
  const [equipamentos, setEquipamentos] = useState([]);

  useEffect(() => {
    setEquipamentos(dadosEquipamentos);
  }, []);

  function mostraDetalhes(modelo, descricao) {
    Swal.fire({
      title: modelo,
      text: descricao,
      footer: 'Você não vai se arrepender dessa compra!',
    });
  }

  function comprarEquipamento(equipamento) {
    // Adiciona o equipamento clicado ao localStorage
    const equipamentosComprados =
      JSON.parse(localStorage.getItem('equipamentosComprados')) || [];
    equipamentosComprados.push(equipamento);
    localStorage.setItem(
      'equipamentosComprados',
      JSON.stringify(equipamentosComprados)
    );

    // Atualiza os itens comprados na página Nav
    const itensCompradosNav =
      JSON.parse(localStorage.getItem('tratoresComprados')) || [];
    itensCompradosNav.push(equipamento);
    localStorage.setItem(
      'tratoresComprados',
      JSON.stringify(itensCompradosNav)
    );

    Swal.fire({
      title: 'Equipamento Salvado!',
      text: `Você salvou o equipamento ${equipamento.modelo}`,
      icon: 'success',
    });
  }

  const listaEquipamentos = equipamentos.map((equipamento) => (
    <div className="equipamento test" key={equipamento.id}>
      <h1 className="modelo">{equipamento.modelo}</h1>
      <div className="equipamento-info">
        <img src={equipamento.foto} alt="equipamento1" className="foto" />
        <div className="botoes">
          <button
            role="button"
            className="btn-detalhes button-37"
            onClick={() =>
              mostraDetalhes(equipamento.modelo, equipamento.descricao)
            }
          >
            Detalhes
          </button>
          <button
            className="btn-comprar button-37"
            onClick={() => comprarEquipamento(equipamento)}
          >
            Salvar nos Favoritos
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="equipamentos-container">
      <div className="lista-equipamentos">{listaEquipamentos}</div>
    </div>
  );
}

export default Equipamentos;
