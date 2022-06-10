import './App.css'
import { ReactComponent as Student } from './img/Studying.svg';
import { ReactComponent as Developer } from './img/Developer.svg';
//Docs
import curriculo from './docs/curriculo-leonardo-strechar.pdf'
//Imgs
import SetaParaBaixo from './img/seta-para-baixo.png'
import FotoDePerfil from './img/FotoDePerfil.jpg'
//Projects
import LigaDigital from './img/liga_digital.png'
import LatalLabs from './img/latal_labs.png'
import DisparoDeEmailPHP from './img/disparo-de-email-php.jpg'
import ApiHandover from './img/api-handover.jpg'
//Icons
import docker from './img/icons/docker.png'
import css from './img/icons/css.png'
import html from './img/icons/html.png'
import nodejs from './img/icons/nodejs.png'
import javascript from './img/icons/javascript.png'
import mysql from './img/icons/mysql.png'
import php from './img/icons/php.png'
import reactjs from './img/icons/reactjs.png'

function App() {
  return (
    <div className='Main'>

{/* header*/}
      <header>
        <div id='home'  className='Title'>
          <h2>PORTFOLIO</h2>
        </div>
        <div className='Sessions-header'>
          <ul>
            <li><a href="/#">HOME</a></li>
            <li><a href='#sobre-mim'>SOBRE MIM</a></li>
            <li><a href='#projetos'>PROJETOS</a></li>
            <li><a href='#contato'>CONTATO</a></li>
          </ul>
        </div>
      </header>

{/* Redes sociais lateral fixada*/}
    <div className='redes-sociais-fixed'>
      <div>
        <a href='https://www.facebook.com/leonardo.strechar.1' rel="noreferrer" target="_blank">
          <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </a>
      </div>
      <div>
        <a href='https://www.instagram.com/leonardo_strechar/' rel="noreferrer" target="_blank">
          <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
        </a>
      </div>
      <div>
        <a href='https://www.linkedin.com/in/leonardo-strechar-a9875a1ab/' rel="noreferrer" target="_blank">
          <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        </a>
      </div>
      <div>
        <a href='https://github.com/LeonardoStrechar' rel="noreferrer" target="_blank">
          <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
      </div>
    </div>

{/* primary session */}
      <div className='Container-home'>
        <div className='Home-img'>
          <Developer/>
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
      <div>
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
  {/* threw session */}
      <div id='projetos' className='Container-Projetos'>
        <h2>Projetos</h2>
        <div className='Container-projetos-line'>
          <a target="_blank" rel="noreferrer" href='http://ligadigital.app.br/main.php'>
            <div className='Project'>
              <img className='Img-Project' src={LigaDigital} alt="Developer"/>
                <p className='Project-title'>Liga Digital</p>
                <h5 className='Project-description'>Esse sistema foi desenvolvido em PHP com objetivo de promover festas de comunidades universitarias, como venda de ingressos, compras de bebidas e alocações de locais.</h5>
            </div>
          </a>
          <a href='/' rel="noreferrer" >
            <div className='Project'>
              <img className='Img-Project' src={LatalLabs} alt="Developer"/>
                <p className='Project-title'>Latal-Labs</p>
                <h5 className='Project-description'>Sistema desenvolvido em ReactJS e NodeJS para gerenciar o laboratorio da empresa Latal e todos as suas funções </h5>
            </div>
          </a>
        </div>
        <div className='Container-projetos-line'>
        <a target="_blank" rel="noreferrer" href='https://github.com/LeonardoStrechar/Disparo-de-email-PHPMailer'>
          <div className='Project'>
            <img className='Img-Project' src={DisparoDeEmailPHP} alt="Developer"/>
              <p className='Project-title'>Disparo de Email</p>
              <h5 className='Project-description'>Aplicação desenvolvida em PHP para realizar disparo de emails dentro de outras aplicações.</h5>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href='https://github.com/LeonardoStrechar/handover-api'>
          <div className='Project'>
            <img className='Img-Project' src={ApiHandover} alt="Developer"/>
              <p className='Project-title'>Api para gerenciar sistema de CRM</p>
              <h5 className='Project-description'>API em NodeJS desenvolvida com todos os métodos HTTP para gerenciar qualquer sistema de CRM ou afins.</h5>
            </div>
          </a>
        </div>
      </div>

{/* for session*/}
      <div className='Container-conhecimentos'>
        <div className='Container-text-linguagens-dominadas'>
          <Student style={{width: '200px', height: '200px'}} />
          <p className='text-linguagens-dominadas'>Conhecimentos em linguagens</p>
          <h3 className='captação'>Vou te mostrar o que eu sei fazer, então</h3>
        </div>
        <div className='Container-icons-de-linguagens'>
          <div>
            <img className='icons' src={docker} alt="Developer"/>
            <img className='icons' src={css} alt="Developer"/>
            <img className='icons' src={html} alt="Developer"/>
            <img className='icons' src={javascript} alt="Developer"/>
          </div>
          <div>
            <img className='icons' src={mysql} alt="Developer"/>
            <img className='icons' src={nodejs} alt="Developer"/>
            <img className='icons' src={php} alt="Developer"/>
            <img className='icons' src={reactjs} alt="Developer"/>
          </div>
        </div>
      </div>
      <div id="contato" className='Container-contato'>
        <h1>VAMOS TRABALHAR JUNTOS?</h1>
        <div className='Container-contato-flex'>
          <div className='Container-contato-mensagem'>
            Vamos conversar pelos terminais ao lado<br/>
            vou respoder o mais rápido possível!
          </div>
          <div className='Container-contato-icon'>
            <div className="link-contact">
              <a href='https://www.facebook.com/leonardo.strechar.1' rel="noreferrer" target="_blank">
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="30px" height="15" fill="white" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
                Facebook
              </a>
            </div>
            <div  className="link-contact">
              <a href='https://www.instagram.com/leonardo_strechar/' rel="noreferrer" target="_blank">
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="30" height="15" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                Instagram
              </a>
            </div>
            <div  className="link-contact">
              <a href='https://www.linkedin.com/in/leonardo-strechar-a9875a1ab/' rel="noreferrer" target="_blank">
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="30" height="15" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
                linkedin
              </a>
            </div>
            <div  className="link-contact">
              <a href='https://github.com/LeonardoStrechar' rel="noreferrer" target="_blank">
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="30" height="15" fill="white" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href='#home'><h4 className='voltar-home'><button className='button-home'>VOLTAR PARA O INICIO</button></h4></a>
      <footer className='Footer'>
        Desenvolvido por Leonardo Strechar
      </footer>
    </div>
  );
}
export default App;