import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function ReservationsView() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get('API_URL/reservations');
      setReservations(response.data);
    } catch (error) {
      console.error('Error al obtener las reservaciones:', error);
    }
  };

  const handleDeleteReservation = async (reservationId) => {
    try {
      await axios.delete(`API_URL/reservations/${reservationId}`);
      fetchReservations();
    } catch (error) {
      console.error('Error al eliminar la reserva:', error);
    }
  };

  const handleEditReservation = (reservationId) => {
    // Aquí puedes definir la lógica para editar la reserva con el ID proporcionado
    console.log('Editando reserva con ID:', reservationId);
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src="/bell.gif" alt="Check GIF" style={{ maxWidth: '100%', width: '200px', borderRadius: '50%'}} /> 
        <h2>Reservaciones</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha <img src="/calendar.gif" alt="Small GIF" style={{ maxWidth: '100%', width: '33px', borderRadius: '50%'}} />  </th>
              <th>Número de Mesa  <img src="/table-number.gif" alt="Small GIF" style={{ maxWidth: '100%', width: '33px', borderRadius: '50%'}} />  </th>
              <th>Número de Personas  <img src="/meeting.gif" alt="Small GIF" style={{ maxWidth: '100%', width: '33px', borderRadius: '50%'}} /></th>
              <th>Acciones  <img src="/check.gif" alt="Small GIF" style={{ maxWidth: '100%', width: '33px', borderRadius: '50%'}} />  </th>
            </tr>
          </thead>
          <tbody>
            {reservations.map(reservation => (
              <tr key={reservation.id} className="active-row">
                <td>{reservation.id}</td>
                <td>{reservation.date}</td>
                <td>{reservation.num_table}</td>
                <td>{reservation.Number_people}</td>
                <td>
                  <button className="button-57" onClick={() => handleDeleteReservation(reservation.id)}>Eliminar</button>
                  <button className="button-57" onClick={() => handleEditReservation(reservation.id)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default ReservationsView;
