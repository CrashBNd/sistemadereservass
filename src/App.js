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
        <h1>Formulario de Reserva</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <div>
            <label htmlFor="numberphone">Telefono :</label>
            <input
              type="text"
              id="numberphone"
              name="numberphone"
              value={formData.numberphone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="date">Fecha:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label  htmlFor="num_table">Número de Mesa:</label>
            <select
            
              id="num_table"
              name="num_table"
              value={formData.num_table}
              onChange={handleChange}
            >
              <option className='inputs' value="">Seleccionar mesa</option>
              {[...Array(15)].map((_, index) => (
                <option key={index} value={index + 1}>{index + 1}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="Number_people">Número de Personas:</label>
            <input
              type="text"
              id="Number_people"
              name="Number_people"
              value={formData.Number_people}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="time">Hora:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="button-container">
          <button className="button-60" role="button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="text">Enviar</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
