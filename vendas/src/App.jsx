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
      <h1>Tratores</h1>
      <Trator />
      <h1>Equipamentos</h1>
      <Equipamentos />
      <Footer></Footer>
    </>
  );
}

export default App;
