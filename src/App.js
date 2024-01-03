import './App.css';
import { React , useState } from "react";
import ReactMarkdown from "react-markdown"

function App() {

  const initialMarkdown = `# ¡Bienvenido a mi Proyecto!

  ## Descripción
  Este proyecto es un lugar donde exploraré diferentes funcionalidades y técnicas utilizando Markdown para crear contenido dinámico y atractivo.
  
  ## Objetivos
  - Aprender a utilizar Markdown para dar formato a texto.
  - Practicar la creación de listas, tablas y otros elementos.
  - Integrar Markdown en aplicaciones web.
  
  ¡Espero que disfrutes explorando este proyecto tanto como yo disfruto creándolo!
  `;

  const [markdown, setMarkdown] = useState(initialMarkdown);


  return (
    <div className="App">
      <div className='editorContainer'>
        <div className='miniNavbar' >
          <h3>Editor</h3>
        </div>
        <textarea id="editor" className='editor' value={markdown} onChange={(e) => setMarkdown(e.target.value)}  />
      </div>
      <div className='markContainer' >
        <div>
          <h3 className='miniNavbar'>Previewer</h3>
        </div>
        <ReactMarkdown id="preview" className="markdown">{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
