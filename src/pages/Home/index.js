import { Header } from '../../components/Header'
import { Body } from '../../components/Body'
import { Teste } from '../../components/Teste'
import background from "../../assets/background.png"
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
          
          </div>
        </div>
    </div>
  );
}

export default App;
