import { useState } from 'react'
import './App.css'
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0)
  const [userName, setUserName] = useState("");
  const [userMascota, setUserMascota] = useState("");
  const [send, setSend] = useState(false);


  const [errorSelect, setErrorSelect] = useState("");

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const onChangeUserMascota = (event) => {
    setUserMascota(event.target.value);
  };

  const validandoDatos = (userName, userMascota) => {
    const nombreSinEspacios = userName.trim();
    const mascotaSinEspacios = userMascota.trim();

    if ((nombreSinEspacios.length >= 3) && (mascotaSinEspacios.length >= 6)) {
      return true;
    } else {
      setErrorSelect("Por favor chequea que la información sea correcta");
      return false;
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const datosValidados = validandoDatos(userName, userMascota);


    if (datosValidados) {
      setSend(true);
      setErrorSelect("");
    }
  };

  return (
    <div className="App" >
      <h2>Formulario de dueño y mascota</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={userName}
          onChange={onChangeUserName}
        />
        <br/>
        <input
          type="text"
          placeholder="Nombre de tu mascota"
          value={userMascota}
          onChange={onChangeUserMascota}
        />
        <br/>
        <input class = "btn "type="submit" value="Enviar" />
      </form>
      <div className="error">{errorSelect}</div>

      {send && (
        <Card
          userName={userName}
          userMascota={userMascota}
        />
      )}
    </div>
  );
}

export default App;
