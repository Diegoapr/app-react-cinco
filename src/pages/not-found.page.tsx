// Importaciones de íconos y componentes desde bibliotecas externas y React Router DOM
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Definición del componente funcional NotFoundPage
const NotFoundPage = () => {
  // Retorna la estructura de la página de error 404
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* Título de error */}
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        {/* Mensaje de error */}
        <p className="text-xl text-gray-700 mb-4">Page Not Found</p>
        {/* Enlace para regresar a la página de inicio */}
        <Link to="/" className="text-blue-500 hover:underline">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

// Exporta el componente NotFoundPage como componente predeterminado
export default NotFoundPage;
