// Una clase controlador establece los metodos (acciones) que vamos a realizar en base de datos
// y esta alineado con el archivo de rutas

export class ControladorReserva {
    constructor() {}

    agregarReservar(request, response) {
        try {
            response.status(200).json({
                mensaje: "Exito en la operacion para reservar una habitacion",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta para reservar una habitacion" + error,
                datos: null,
            });
        }
    }
    consultarReservas(request, response) {
        try {
            response.status(200).json({
                mensaje: "Exito en la operacion de consultar de reservas",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta de consulta de reservas" + error,
                datos: null,
            });
        }
    }

    consultarReserva(request, response) {
        try {
            response.status(200).json({
                mensaje: "Exito en la operacion de consulta de reserva",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta de consultad de reserva" + error,
                datos: null,
            });
        }
    }

    editarReserva(request, response) {
        try {
            response.status(200).json({
                mensaje: "Exito en la operacion para editar una reserva",
                datos: null,
            });
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallo en la consulta para editar una reserva" + error,
                datos: null,
            });
        }
    }
}
