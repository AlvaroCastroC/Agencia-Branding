import './App.css';
import './Responsive/responsive.css';
import React, { useState } from 'react';

import Topo from './Componentes/Topo';
import Banner from './Componentes/Banner';
import Experiencia from './Componentes/Experiencia';
import Card from './Componentes/Card';
import Rodape from './Componentes/Rodape';

function App() {

let tema = "";
let modo = "";

  const [temaDark, setMudaTema] = useState(false);

  function alterarCor () {
    setMudaTema(!temaDark)
  }
  if(temaDark === true){
    tema = "assets/sun.png";
    modo = "Dark";
  }else {
    tema = "assets/moon.png";
  }

  return (
    <div className={modo} >
      <Topo
       click = {alterarCor}
       Tema = {tema} />
      <Banner />
      <Experiencia />
      <Card />
      <Rodape />
    </div>
  );
}

export default App;
