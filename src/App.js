import './App.css'


import curriculo from './docs/curriculo-leonardo-strechar.pdf'

import Developer from './img/Developer.png'
import SetaParaBaixo from './img/seta-para-baixo.png'
import FotoDePerfil from './img/FotoDePerfil.jpg'

function App() {
  return (
    <div className='Main'>
{/* header*/}
      <header>
        <div className='Title'>
          <h2>PORTFOLIO</h2>
        </div>
        <div className='Sessions-header'>
          <ul>
            <li>HOME</li>
            <li><a href="#sobre-mim">SOBRE MIM</a></li>
            <li>PROJETOS</li>
            <li>CONTATOS</li>
          </ul>
        </div>
      </header>
{/* primary session */}
      <div className='Container-home'>
        <div className='Home-img'>
          <img className='Img-developer' src={Developer} alt="Developer"/>
        </div>
        <div className='home-text'>
          <h4>Olá, eu sou</h4>
          <h1 className='home-text-effect'>Leonardo Strechar</h1>
          <h3>Developer Back-end</h3>
        </div>
      </div>
      <div className='seta-para-baixo'>
        <img className='seta' src={SetaParaBaixo} alt="Developer"/>
      </div>
{/* second session */}
      <div id='sobre-mim' className='Container-sobre-mim'>
        <div className='Container-sobre-mim-text'>
          <h2>Sobre mim</h2>
          <p> 
            Sou Desenvolvedor de sistemas web com mais de 5
            anos de experiência, desde pequeno sempre fui
            apaixonado por tecnologia e apesar de nascer no interior e
            trabalhar por muito tempo com agricultura, nunca deixei
            essa paixão de lado e hoje virou minha realidade!
          </p>
          <button><a href={curriculo} download="Leonardo-strechar.pdf">Curriculo</a></button>
        </div>
        <div className='Container-sobre-mim-img'>
          <img className='Img-foto-de-perfil' src={FotoDePerfil} alt="Developer"/>
        </div>
      </div>
    </div>
  );
}
export default App;