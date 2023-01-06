import React, { useState } from 'react';
import './App.css';
import Article from './components/Article';

function App() {

  const [nome, setNome] = useState([])

  function changeNome() {
    setNome('Ciência e Tecnologia')
  }

  return (
    <div className="App">
      <h1>Blog Danki Code</h1>
      <h2>{nome}</h2>
      <button onClick={changeNome}>Mudar o nome</button>

      <hr />

    <Article
    titulo="Noticia 01"
    descricao='Descrição da noticia 01'></Article>
    </div>
  );
}

export default App;
