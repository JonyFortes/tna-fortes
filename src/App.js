import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/titulo.jsx';

function App() {
  return (  
    <>  
    <NavBar />
    <Titulo titulos="TNA"></Titulo>
    </>
  );
}

export default App;