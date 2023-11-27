import './components/styles/styleApp.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Trator from './components/Trator';
import Equipamentos from './components/Equipamentos';
import Introducao from './components/Introducao';

function App() {
  return (
    <>
      <Nav />
      <Introducao />
      <div className="background1">
        <h1>TRATORES</h1>
      </div>
      <Trator />
      <h1 className="background2">Equipamentos</h1>
      <Equipamentos />
      <Footer></Footer>
    </>
  );
}

export default App;
