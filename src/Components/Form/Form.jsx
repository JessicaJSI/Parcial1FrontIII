import React from "react";
import Card from "../Card/Card";
import { useState } from "react";
import "./Form.css"

const Form = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    cancion: "",
    cantante: "",
  });

  const [isSendedInfo, setIsSendedInfo] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e, propiedad) => {
    setDatos({ ...datos, [propiedad]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //setIsSendedInfo(false);
    setErrorMessage("");

    const nameIsValid =
      datos.nombre.length > 2 && !datos.nombre.startsWith(" ");
    const songIsValid = datos.cancion.length > 6;
    const singerIsValid = datos.cantante.length > 3;

    if (!nameIsValid || !songIsValid || !singerIsValid) {
      console.log(datos.nombre);
      console.log(nameIsValid);
      console.log(songIsValid);
      console.log(singerIsValid);
      setErrorMessage("Por favor chequea que la información sea correcta");
    }
    setIsSendedInfo(true);
    return;
  };

  //Envio del formulario
  console.log(datos);

  return (
    <div className="container">
      <h1> Canción Favorita </h1>
      <div type="box">
        <form onSubmit={handleSubmit}>
          <span>Ingresa tu Nombre</span>
          <input
            type="text"
            name="nombre"
            onChange={(e) => handleChange(e, "nombre")}
          />
          <span>Ingresa nombre de la Canción</span>
          <input
            type="text"
            name="cancion"
            onChange={(e) => handleChange(e, "cancion")}
          />
          <span>Ingresa nombre del cantante</span>
          <input
            type="text"
            name="cantante"
            onChange={(e) => handleChange(e, "cantante")}
          />
          <button type="submit" style={{
        backgroundColor: '#60CADD'}}>Enviar</button>
        </form>
      </div>
      <div>
        {errorMessage === "" && isSendedInfo ? (
          <Card
            nombre={datos.nombre}
            cancion={datos.cancion}
            cantante={datos.cantante}
          />
        ) : (
          <span style={{ color: "red" }}>{errorMessage}</span>
        )}
      </div>
    </div>
  );
};

export default Form;
