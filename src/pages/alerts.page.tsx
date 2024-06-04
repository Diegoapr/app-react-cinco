// Importación del módulo React y del hook useState desde 'react'
import { useState } from 'react';

// Definición del componente funcional AddAlertPage
const AddAlertPage = () => {
    // Definición de estados para los campos de la alerta
    const [nombreAlerta, setNombreAlerta] = useState(''); // Estado para el nombre de la alerta
    const [fecha, setFecha] = useState(''); // Estado para la fecha de la alerta
    const [hora, setHora] = useState(''); // Estado para la hora de la alerta
    const [repetir, setRepetir] = useState(false); // Estado para indicar si la alerta debe repetirse

    // Función para manejar el evento de añadir una nueva alerta
    const handleAddAlert = () => {
        // Lógica para manejar la adición de la alerta
        // Por ejemplo, podrías enviar los datos al servidor o almacenarlos localmente
        console.log("Nueva alerta:", { nombreAlerta, fecha, hora, repetir });
        
        // Limpia los campos después de agregar la alerta
        setNombreAlerta('');
        setFecha('');
        setHora('');
        setRepetir(false);
    };

    // Renderiza el formulario de añadir alerta
    return (
        <div>
            <h1>Añadir Alerta</h1>
            {/* Campo de entrada para el nombre de la alerta */}
            <div className="mb-2">
                <label>Nombre de la alerta:</label>
                <input
                    type="text"
                    value={nombreAlerta}
                    onChange={(e) => setNombreAlerta(e.target.value)}
                />
            </div>
            {/* Campo de entrada para la fecha de la alerta */}
            <div className="mb-2">
                <label>Fecha:</label>
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>
            {/* Campo de entrada para la hora de la alerta */}
            <div className="mb-2">
                <label>Hora:</label>
                <input
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                />
            </div>
            {/* Checkbox para indicar si la alerta debe repetirse */}
            <div className="mb-4">
                <label>Repetir:</label>
                <input
                    type="checkbox"
                    checked={repetir}
                    onChange={(e) => setRepetir(e.target.checked)}
                />
            </div>
            {/* Botón para añadir la alerta */}
            <button onClick={handleAddAlert}>Añadir Alerta</button>
        </div>
    );
};

// Exporta el componente AddAlertPage como componente predeterminado
export default AddAlertPage;
