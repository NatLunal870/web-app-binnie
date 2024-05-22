import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; //SIRVE PARA ENRUTAR
//COMPONENTES 
import Navbar from './Navbar/Navbar';
import Inicio from "./components/inicio/Inicio"
import Actividades from "./components/actividades/Actividades"
import Contacto from "./components/contacto/Contacto"
import Sesion from "./components/sesion/Sesion"
import Footer from "./components/footer/Footer"
import Sactivate from "./components/sactivate/Sactivate"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/actividades' element={<Actividades/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/sesion' element={<Sesion/>}/>
            <Route path='/sa' element={<Sactivate/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
