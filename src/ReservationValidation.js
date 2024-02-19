import React, { useState } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <h2>Validación de Reservación</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="validationCode">Ingrese los 4 dígitos:</label>
        <input
          type="text"
          id="validationCode"
          value={validationCode}
          onChange={(e) => setValidationCode(e.target.value)}
        />
        <button type="submit">Validar</button>
      </form>
      {validationResult && <p>{validationResult}</p>}
    </div>
  );
}

export default ReservationValidation;
