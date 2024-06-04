// Definición de la clase Api
export default class Api {
    // URL base de la API
    private static url_api = "https://jsonplaceholder.typicode.com";
    
    // Método estático para realizar solicitudes GET
    public static async get(url: string) {
        // Combinación de la URL base con la URL específica proporcionada como argumento
        const response = await fetch(`${this.url_api}${url}`);

        // Verificación de la respuesta de la solicitud HTTP
        if(response.status !== 200) {
            // Lanza un error si la respuesta no es satisfactoria (código de estado no es 200 OK)
            throw new Error("Error fetching data");
        }
        // Devuelve los datos de la respuesta en formato JSON
        return response.json();
    } 
}
