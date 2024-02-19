import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function ReservationValidation() {
  const [validationCode, setValidationCode] = useState('');
  const [validationResult, setValidationResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar los 4 dígitos al backend para la validación
      const response = await axios.post('API_URL/validate-reservation', { code: validationCode }); // Reemplaza 'API_URL' con la URL de tu backend
      setValidationResult(response.data.message); // Asigna el mensaje de validación recibido del backend
    } catch (error) {
      console.error('Error al enviar la validación:', error);
    }
  };

  // Función para generar asteriscos basados en la longitud de la cadena
  const generateStars = (length) => {
    return '*'.repeat(length);
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src="/check.gif" alt="Check GIF" style={{ maxWidth: '100%', width: '200px', borderRadius: '50%'}} /> 
        <h2>Validación de Reservación</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="validationCode">Ingrese los 4 dígitos:</label>
          <input
            type="text"
            id="validationCode"
            value={generateStars(validationCode.length)} // Muestra asteriscos en lugar de dígitos
            onChange={(e) => setValidationCode(e.target.value)}
          />
          <button type="submit" className="button-57">Validar</button>
        </form>
        {validationResult && <p>{validationResult}</p>}
      </header>
    </div>
  );
}

export default ReservationValidation;
