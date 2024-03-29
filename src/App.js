import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    id: '',
    numberphone:'',
    date: '',
    num_table: '',
    Number_people: '',
    time: '',
    validated: '',
    ticket_id: '',
    token_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src="/login.gif" alt="Check GIF" style={{ maxWidth: '100%', width: '190px', borderRadius: '50%'}} /> 
        <h3>Formulario de Reserva</h3>
        <form onSubmit={handleSubmit} className="form-container">
          <div>
            <label htmlFor="numberphone">Telefono  <img src="/phone.gif" alt="Small GIF" style={{ maxWidth: '100%', width: '33px', borderRadius: '50%'}} /> :</label>
            <input
              type="text"
              id="numberphone"
              name="numberphone"
              value={formData.numberphone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="date">  <img src="/calendar.gif" alt="Small GIF" style={{ maxWidth: '100%', width: '33px', borderRadius: '50%'}} />  Fecha:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div >
            <label   htmlFor="num_table">  <img src="/table-number.gif" alt="Small GIF" style={{ maxWidth: '100%', width: '33px', borderRadius: '50%'}} />  Número de Mesa :</label>
            <select
  id="num_table"
  name="num_table"
  value={formData.num_table}
  onChange={handleChange}
  className="select" // Agrega la clase select
>

              <option className='inputs' value="">Seleccionar mesa</option>
              {[...Array(15)].map((_, index) => (
                <option key={index} value={index + 1}>{index + 1}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="Number_people">  <img src="/meeting.gif" alt="Small GIF" style={{ maxWidth: '100%', width: '33px', borderRadius: '50%'}} />  Número de Personas:</label>
            <input
              type="number"
              id="Number_people"
              name="Number_people"
              value={formData.Number_people}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="time">  <img src="/time.gif" alt="Small GIF" style={{ maxWidth: '100%', width: '33px', borderRadius: '50%'}} />  Hora:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </form>
       
      </header>
      <div className="button-container">
          <button className="button-60" role="button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="text">     <img src="/bill.gif" alt="Small GIF" style={{ maxWidth: '100%', width: '40px', borderRadius: '50%'}} />  Reserva Ahora! </span>
          </button>
        </div>
    </div>
  );
}

export default App;
