import { useEffect, useState } from 'react';
import { dadosTratores } from '../../public/tratores';
import Swal from 'sweetalert2';
import './styles/styleEquipamentos.css';

function Trator() {
  const [tratores, setTratores] = useState([]);

  function mostraDetalhes(modelo, descricao) {
    Swal.fire({
      title: modelo,
      text: descricao,
      footer: 'Você não vai se arrepender dessa compra!',
    });
  }

  function comprarTrator(trator) {
    // Adiciona o trator clicado ao localStorage
    const tratoresComprados =
      JSON.parse(localStorage.getItem('tratoresComprados')) || [];
    tratoresComprados.push(trator);
    localStorage.setItem(
      'tratoresComprados',
      JSON.stringify(tratoresComprados)
    );
    Swal.fire({
      title: 'Trator comprado!',
      text: `Você comprou o trator ${trator.modelo}`,
      icon: 'success',
    });
  }

  useEffect(() => {
    setTratores(dadosTratores);
  }, []);

  const listaTratores = tratores.map((trator) => (
    <div className="test" key={trator.id}>
      <h1 className="modelo">{trator.modelo}</h1>
      <div className="trator-info">
        <img src={trator.foto} alt="trator1" className="foto" />
        <div className="botoes">
          <button
            className="btn-detalhes"
            onClick={() => mostraDetalhes(trator.modelo, trator.descricao)}
          >
            Detalhes
          </button>
          <button className="btn-comprar" onClick={() => comprarTrator(trator)}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="lista-tratores">{listaTratores}</div>
    </>
  );
}

export default Trator;
