const getPedido = (e) => {
    
    const tipoPago = (e.tipoPago.value == "1.10") ? "Tarjeta de Crédito" : "PayPal"
    const total = (parseInt(e.precio.value) * parseInt(e.cantidad.value) * parseFloat(e.tipoPago.value))
                .toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })
    return {
        estatus: "Pedido Recibido",
        cliente: e.nombre.value,
        direccion: e.direccion.value,
        telefono: e.telefono.value,
        especialidad: e.especialidad.value,
        cantidad: e.cantidad.value,
        tipoPago: tipoPago,
        total: total
    }
}

const PedidoDefault = {
    estatus: "",
    cliente: "",
    direccion: "",
    telefono: "",
    especialidad: "",
    cantidad: "",
    tipoPago: "",
    total: ""
}

export { PedidoDefault, getPedido }