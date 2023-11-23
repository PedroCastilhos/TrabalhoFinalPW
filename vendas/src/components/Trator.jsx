import { useEffect, useState } from 'react';
import { dadosTratores } from '../../public/tratores';
import Swal from 'sweetalert2';

function Trator() {
  const [tratores, setTratores] = useState([]);

  function mostraDetalhes(modelo, descricao) {
    Swal.fire({
      title: modelo,
      text: descricao,
      footer: 'Você não vai se arrepender dessa compra!',
    });
  }

  useEffect(() => {
    setTratores(dadosTratores);
  }, []);

  const listaTratores = tratores.map((trator) => (
    <>
      <h1>{trator.modelo}</h1>
      <img src={trator.foto} alt="trator1" />
      <button onClick={() => mostraDetalhes(trator.modelo, trator.descricao)}>
        Detalhes
      </button>

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
