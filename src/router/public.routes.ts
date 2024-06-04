import { RouteObject } from "react-router-dom";
import HomeLayout from "../layouts/home.layout";
import { createElement } from "react";
import NotFoundPage from "../pages/not-found.page";
import HomePage from "../pages/home.page";
import ContactPage from "../pages/contact.page";
import UserPage from "../pages/user.page";
import LoginPage from "../pages/login.page";
import AlertsPage from "../pages/alerts.page";

// Definición de las rutas públicas
export const publicRoutes: RouteObject[] = [
    {
        path: "/", // Ruta raíz
        Component: HomeLayout, // Componente principal de diseño
        errorElement: createElement(NotFoundPage), // Elemento de error
        children: [
            {
                path: "/", // Ruta de inicio
                Component: HomePage, // Página de inicio
            },
            {
                path: "contact", // Ruta de contacto
                Component: ContactPage, // Página de contacto
            },
            {
                path: "user/:id/", // Ruta de detalle de usuario con parámetro de ID
                Component: UserPage, // Página de detalle de usuario
            },
            {
                path: "alerts/:id", // Ruta de detalle de alertas con parámetro de ID
                Component: AlertsPage, // Página de detalle de alertas
            }
        ],
    },
    {
        path: '/login', // Ruta de inicio de sesión
        element: createElement(LoginPage), // Elemento de inicio de sesión
    },
];
