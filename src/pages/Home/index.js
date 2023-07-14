import { Header } from '../../components/Header'
import { Body } from '../../components/Body'
import { Teste } from '../../components/Teste'
import background from "../../assets/background.png"
import foto from "../../assets/foto.jpg"
import './styles.css'

function App() {
  return (
    <div className="App">
        <Header />
        <div className='conteudo'>
          <img src={background} className='background' alt="back app"></img>
          <div className='info'>
            <div>
              <input name="usuario" placeholder='@username'></input>
              <button>Buscar</button>
            </div>
            <div className="perfil">
              <img 
                src={foto} 
                className="profile"
              ></img>
            </div>
            <div>
              <h3>Caio Cavalcanti</h3>
              <p>Descrição</p>
            </div>
            <hr></hr>
          </div>
        </div>
    </div>
  );
}

export default App;
