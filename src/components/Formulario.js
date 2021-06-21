import React, { Fragment, useState } from "react";
//import uuid from 'uuid/v4';
//const { v4: uuidv4 } = require("uuid");

const Formulario = () => {
  //Crear state de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, actualizarError] = useState(false); //no lleva llaves pq no es un objeto

  //Funcion que se ejecuta cada que el usuario escribe en el input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita, //tomamos una copia
      [e.target.name]: e.target.value, //guardo el valor (value) en el campo  (e.target.name (ej: mascota))
    });
  };

  //Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Submit
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      //trim quita los espacios en blanco
      actualizarError(true);
      return;
    }

    // Eliminar el mesaje previo
    actualizarError(false);

    // Asiganar un ID
    //cita.id = uuidv4(); //libreria q se instala en el git para generar un id. (instalacion: npm i uud )

    // Crear la cita

    // Reiniciar el form
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label for="">Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label for="">Nombre Dueño</label>
        <input
          type="text"
          name="propietatio"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />

        <label for="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label for="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label for="">Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
