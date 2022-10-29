// Una clase controlador establece los metodos (acciones) que vamos a realizar en base de datos
// y esta alineado con el archivo de rutas

export class ControladorHabitacion {
    constructor() {}

    agregarHabitacion(request, response) {

        let datosRegistrar = request.body
        console.log(datosRegistrar)

        try {
            response.status(200).json({
                mensaje: "Exito en la operacion para agregar una habitacion",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta para agregar una habitacion" + error,
                datos: null,
            });
        }
    }

    consultarHabitacion(request, response) {

        let id = request.params.id
        console.log("El id enviado fue: "+id)

        try {
            response.status(200).json({
                mensaje: "Exito en la operacion de consulta de habitacion",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta de consulta de habitacion" + error,
                datos: null,
            });
        }
    }

    consultarHabitaciones(request, response) {
        try {
            response.status(200).json({
                mensaje: "Exito en la operacion de consulta de habitaciones",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta de consultad de habitaciones" + error,
                datos: null,
            });
        }
    }

    editarHabitacion(request, response) {
        let id = request.params.id
        let datosEditar = request.body
        console.log("La habitacion a editar es: " + id)
        console.log(datosEditar)
        try {
            response.status(200).json({
                mensaje: "Exito en la operacion para editar una habitacion",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta para editar una habitacion" + error,
                datos: null,
            });
        }
    }
}
