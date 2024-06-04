// Importación de iconos y componentes necesarios desde 'react-fontawesome', 'react' y 'react-router-dom'
import { faEye, faTrash, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Api from "../helpers/api"; // Importación de una clase de ayuda para realizar solicitudes a la API
import { User } from "../models/user.model"; // Importación del modelo de usuario
import { Link } from "react-router-dom"; // Importación del componente Link para enlaces internos

// Definición del componente funcional HomePage
const HomePage = () => {
    // Estado para almacenar la lista de usuarios
    const [users, setUsers] = useState<User[]>([]);

    // Efecto para cargar los usuarios al montar el componente
    useEffect(() => {
        // Llamada a la API para obtener la lista de usuarios
        Api.get('/users').then(response => {
            // Actualiza el estado con la lista de usuarios obtenida
            setUsers(response);
        });
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    // Retorna la estructura de la página de inicio
    return (
        <div className="relative overflow-x-auto">
            {/* Tabla para mostrar los usuarios */}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Entidad</th>
                        <th scope="col" className="px-6 py-3">Nombre del proceso</th>
                        <th scope="col" className="px-6 py-3">Tipo de proceso</th>
                        <th scope="col" className="px-6 py-3">Presupuesto del proceso</th>
                        <th scope="col" className="px-6 py-3">Objeto del proceso</th>
                        <th scope="col" className="px-6 py-3">Especificaciones técnicas</th>
                        <th scope="col" className="px-6 py-3">Requerimientos técnicos</th>
                        <th scope="col" className="px-6 py-3">Etapa del proceso</th>
                        <th scope="col" className="px-6 py-3">Observaciones</th>
                        <th scope="col" className="px-6 py-3">Fechas importantes</th>
                        <th scope="col" className="px-6 py-3">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapeo de la lista de usuarios para renderizar cada fila de la tabla */}
                    {users.map(user => (
                        <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {/* Columna para la entidad (nombre y correo electrónico) */}
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={`https://ui-avatars.com/api/?name=${user.name}`} alt={`${user.name} avatar`} />
                                <div className="pl-3">
                                    <div className="text-base font-semibold">{user.name}</div>
                                    <div className="font-normal text-gray-500">{user.email}</div>
                                </div>
                            </th>
                            {/* Otras columnas para los detalles del proceso */}
                            <td className="px-6 py-4">{user.phone}</td>
                            <td className="px-6 py-4">{user.website}</td>
                            <td className="px-6 py-4">{user.tipoProceso}</td>
                            <td className="px-6 py-4">{user.presupuestoProceso}</td>
                            <td className="px-6 py-4">{user.objetoProceso}</td>
                            <td className="px-6 py-4">{user.especificacionesTecnicas}</td>
                            <td className="px-6 py-4">{user.requerimientosTecnicos}</td>
                            <td className="px-6 py-4">{user.etapaProceso}</td>
                            <td className="px-6 py-4">{user.observaciones}</td>
                            <td className="px-6 py-4">{user.fechasImportantes}</td>
                            {/* Columna para las acciones (ver, eliminar, alertas) */}
                            <td className="px-6 py-4 flex items-center justify-center gap-2">
                                {/* Enlace para ver detalles del usuario */}
                                <Link
                                    to={`/user/${user.id}`}
                                    className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <FontAwesomeIcon icon={faEye} className="p-1" />
                                </Link>
                                {/* Botón para eliminar usuario */}
                                <button
                                    type="button"
                                    className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
                                >
                                    <FontAwesomeIcon icon={faTrash} className="p-1" />
                                </button>
                                {/* Enlace para configurar alertas */}
                                <Link
                                    to={`/alertas/${user.id}`}
                                    className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
                                >
                                    <FontAwesomeIcon icon={faBell} className="p-1" />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Exporta el componente HomePage como componente predeterminado
export default HomePage;
