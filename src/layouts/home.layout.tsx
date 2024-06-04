// Importación de los componentes y hooks necesarios desde react-router-dom
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

// Definición del componente HomeLayout
const HomeLayout = () => {
    // Utilización del hook useNavigate para obtener una función de navegación
    const navigate = useNavigate();

    // Retorna la estructura del layout de la página principal
    return (
        <>
            {/* Barra de navegación */}
            <nav className="bg-blue-900 border-gray-200 dark:bg-blue-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Enlace al inicio */}
                    <Link to="/" className="flex items-center">
                        <span className="text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
                            SOLUTRONIC
                        </span>
                    </Link>
                    {/* Menú de navegación */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0">
                            {/* Enlace a la página de inicio */}
                            <li>
                                <NavLink
                                    to="/"
                                    // Establece la clase CSS del enlace activo o inactivo
                                    className={({ isActive }) => (isActive ? "text-blue-500" : "text-white") + " block py-2 px-3 rounded"}
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            {/* Enlace a la página de contacto */}
                            <li>
                                <NavLink
                                    to="/contact"
                                    // Establece la clase CSS del enlace activo o inactivo
                                    className={({ isActive }) => (isActive ? "text-blue-500" : "text-white") + " block py-2 px-3 rounded"}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            {/* Botón para redirigir a la página de inicio de sesión */}
                            <button
                                onClick={() => navigate('/login')} // Llama a la función navigate con la ruta '/login'
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Login
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Componente Outlet para renderizar las rutas hijas */}
            <Outlet />
        </>
    );
};

// Exporta el componente HomeLayout como componente predeterminado
export default HomeLayout;
