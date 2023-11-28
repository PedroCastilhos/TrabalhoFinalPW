import { useState } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './styles/styleNav.css';

function Nav() {
  const [itensComprados, setItensComprados] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  function mostrarItensComprados() {
    const tratoresComprados =
      JSON.parse(localStorage.getItem('tratoresComprados')) || [];
    setItensComprados(tratoresComprados);
    setModalOpen(true);
  }

  function fecharModal() {
    setModalOpen(false);
  }

  function removerItem(index) {
    const novosItens = [...itensComprados];
    novosItens.splice(index, 1);
    setItensComprados(novosItens);
    localStorage.setItem('tratoresComprados', JSON.stringify(novosItens));
  }

  function limparLocalStorage() {
    localStorage.removeItem('tratoresComprados');
    setItensComprados([]);
    setModalOpen(false);
  }

  return (
    <>
      <nav className="container">
        <div className="links">
          <img src="../public/logo.png" alt="Ícone" />
          <h2>
            <a href="">Máquinas</a>
          </h2>
          <h1>
            <a href="">John Deere</a>
          </h1>
          <h2>
            <a href="">Equipamentos</a>
          </h2>
          <button
            onClick={mostrarItensComprados}
            className="button-37"
            role="button"
          >
            Favoritos
          </button>
        </div>
      </nav>

      <Modal open={modalOpen} onClose={fecharModal} center>
        <div className="itens-comprados">
          <h2>Itens Favoritados</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Descrição</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {itensComprados.map((item, index) => (
                <tr key={index}>
                  <td>{item.modelo}</td>
                  <td>{item.descricao}</td>
                  <td>
                    <button onClick={() => removerItem(index)}>Remover</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={limparLocalStorage}>Limpar Favoritos</button>
        </div>
      </Modal>
    </>
  );
}

export default Nav;

{
  /* <div className="icons">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                className="bi bi-bookmark"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                className="bi bi-bookmark"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </a>
          </div> */
}
