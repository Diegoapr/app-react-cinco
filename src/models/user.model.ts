// Definición de la interfaz User para representar la estructura de un usuario
export interface User {
    id: number; // Identificador único del usuario
    name: string; // Nombre del usuario
    email: string; // Correo electrónico del usuario
    phone: string; // Número de teléfono del usuario
    website: string; // Sitio web del usuario
    address: {
        street: string; // Calle de la dirección del usuario
        city: string; // Ciudad de la dirección del usuario
        suite: string; // Suite o número de apartamento de la dirección del usuario
        zipcode: string; // Código postal de la dirección del usuario
        geo: {
            lat: string; // Latitud de la ubicación geográfica del usuario
            lng: string; // Longitud de la ubicación geográfica del usuario
        };
    };
    company: {
        name: string; // Nombre de la empresa del usuario
        catchPhrase: string; // Frase de presentación de la empresa del usuario
        bs: string; // Descripción de la actividad principal de la empresa del usuario
    };
    // Propiedades adicionales para el proceso del usuario
    tipoProceso: string; // Tipo de proceso en el que está involucrado el usuario
    presupuestoProceso: number; // Presupuesto asignado para el proceso del usuario
    objetoProceso: string; // Objeto del proceso en el que está involucrado el usuario
    especificacionesTecnicas: string; // Especificaciones técnicas relacionadas con el proceso del usuario
    requerimientosTecnicos: string; // Requerimientos técnicos para el proceso del usuario
    etapaProceso: string; // Etapa actual del proceso del usuario
    observaciones: string; // Observaciones o comentarios sobre el proceso del usuario
    fechasImportantes: string; // Fechas importantes relacionadas con el proceso del usuario
}
