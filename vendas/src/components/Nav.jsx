import './styleNav.css';

function Nav() {
  return (
    <>
      <nav className="container">
        <img src="../public/logo.png" alt="Ícone" />
        <div className="links">
          <h2>
            <a href="">Máquinas</a>
          </h2>
          <h1>
            <a href="">John Deere</a>
          </h1>
          <h2>
            <a href="">Equipamentos</a>
          </h2>
        </div>
      </nav>
    </>
  );
}

export default Nav;
