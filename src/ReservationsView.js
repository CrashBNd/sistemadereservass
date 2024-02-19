import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReservationsView() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Lógica para obtener las reservaciones desde el backend
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('API_URL/reservations'); // Reemplaza 'API_URL' con la URL de tu backend
      setReservations(response.data);
    } catch (error) {
      console.error('Error al obtener las reservaciones:', error);
    }
  };

  const handleDeleteReservation = async (reservationId) => {
    try {
      await axios.delete(`API_URL/reservations/${reservationId}`); // Reemplaza 'API_URL' con la URL de tu backend
      // Vuelve a cargar las reservaciones después de eliminar
      fetchReservations();
    } catch (error) {
      console.error('Error al eliminar la reserva:', error);
    }
  };

  // Renderizar las reservaciones en la interfaz de usuario
  return (
    <div>
      <h2>Reservaciones</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Número de Mesa</th>
            <th>Número de Personas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.date}</td>
              <td>{reservation.num_table}</td>
              <td>{reservation.Number_people}</td>
              <td>
                <button onClick={() => handleDeleteReservation(reservation.id)}>Eliminar</button>
                {/* Agrega botón para modificar reserva */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationsView;
