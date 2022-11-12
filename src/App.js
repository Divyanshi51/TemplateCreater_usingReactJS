import React from 'react';
import { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';
import * as htmltoimage from 'html-to-image';


function App() {

  const [input, setinput] = useState("");

  const InputUpdated = (event) => {
    setinput(event.target.value)
  }

  const [flag, setflag] = useState("");

  const download = () => {
    let node = document.getElementById("card");
    htmltoimage.toPng(node)
      .then(function (dataUrl) {
        var img = new Image()
        img.src = dataUrl
        document.body.appendChild(img)
        saveAs(dataUrl, " template.png")
        setflag("Downloaded!!! try another one...")
      })
      .catch(error => console.log(error))
  }

  useEffect(() => console.log(" useeffect rendered"), [flag, download])

  return (
    <div className="App">
      <center>
        <header className='header'>
          <h1>Create Your Template</h1>
          <p> Write Your Text in Input box and Hit Download Button</p>
        </header>
        <input type="text" className="textinput" placeholder='Text here' value={input} onChange={InputUpdated} />
        <div className='card' id='card'>
          <div className='card-container'>
            {input ? input : "Create Your Template.."}
          </div>
        </div>
        <p>{flag}</p>
        <input type="button" className='button' value="Download" onClick={download} />
      </center>
    </div>
  );
}

export default App;
