import React from "react";

function App() {
  return (
    <div className="page">
      <div className="top-image" style={{ width: "100%", height: "auto" }}>
        <img src={'/bloques.png'} alt="Imagen Superior" style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="content" style={{display: "flex", flexDirection: "column", minHeight:"100vh"}}>
        
        <div className="logo" style={{ position: "absolute", top: 60, left: 30, width: "26%", height: "auto" }}>
        <img src={'/Logo.png'} alt="logo" style={{ width: "100%", height: "auto" }} />
        </div>

        <div className="perfil" style={{ position: "absolute", top: 80, left: 310, width: "25%", height: "auto" }}>
        <img src={'/perfil.png'} alt="perfil" style={{ width: "100%", height: "auto" }} />
        <p style={{}}>000000</p>
        </div>

        <h1>Contenido Central</h1>
        <p>Aquí va el contenido principal de la página.</p>
      </div>

      <div className="bottom-image" style={{ width: "100%", height: "auto" }}>
        <img src={'/bloques2.png'} alt="Imagen Inferior" style={{ width: "100%", height: "auto" }} />
      </div>
    </div>
  );
}

export default App;

