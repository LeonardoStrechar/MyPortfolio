import './App.css'

import Developer from './img/Developer.png'
import SetaParaBaixo from './img/seta-para-baixo.png'

function App() {
  return (
    <div>
      <header>
        <div className='Title'>
          <h2>PORTFOLIO</h2>
        </div>
        <div className='Sessions-header'>
          <ul>
            <li>HOME</li>
            <li>SOBRE MIM</li>
            <li>PROJETOS</li>
            <li>CONTATOS</li>
          </ul>
        </div>
      </header>
      <div className='Container-home'>
        <div className='Home-img'>
          <img className='Img-developer' src={Developer} alt="Developer"/>
        </div>
        <div className='home-text'>
          <h1 className='home-text-effect'>Leonardo Strechar</h1>
          <h3>Developer Back-end</h3>
        </div>
      </div>
      <div className='seta-para-baixo'>
        <img className='seta' src={SetaParaBaixo} alt="Developer"/>
      </div>
        <div className='Container-sobre-mim'>
          <div className='sobre-mim-text'>
            <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend nunc, vulputate sapien varius malesuada diam tristique non nostra integer, interdum feugiat semper dignissim lacus nec facilisi aliquet. Leo vestibulum habitant penatibus quis non lorem pulvinar massa lacinia nullam hac commodo eu, faucibus inceptos dis tortor cras at finibus molestie pretium class sodales. Primis senectus blandit purus ornare ultrices molestie himenaeos, cubilia convallis lectus urna sapien curae pharetra consequat, tortor sociosqu quisque viverra vehicula turpis. Lorem per nullam posuere libero turpis elit vivamus arcu mollis lobortis natoque, parturient duis est ac egestas ligula malesuada mauris eu. Ac fringilla adipiscing sit nisi dis orci proin class varius vel aliquet at sodales, dapibus accumsan praesent aptent aliquam eleifend erat purus luctus duis pulvinar dui, phasellus vitae congue tempus nec fusce metus blandit litora enim ullamcorper conubia. Porttitor montes in placerat elit sagittis arcu facilisis, turpis purus curabitur massa facilisi eget venenatis, ut etiam neque ligula class commodo.
            </p>
          </div>
          <div className='sobre-mim-text'>

          </div>
        </div>
    </div>
  );
}
export default App;