const Detail = ({Pedido}) => {
  return (
    <div className="col-12 col-xl-3 py-2">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">Detalle del Pedido</h5>
        </div>
        <div className="card-body">
          <p className="text-center font-weight-bold">{Pedido.estatus}</p>
          <p className="text-justify"><b>Cliente: </b> {Pedido.cliente}</p>
          <p className="text-justify"><b>Dirección: </b> {Pedido.direccion}</p>
          <p className="text-justify"><b>Teléfono: </b> {Pedido.telefono}</p>
          <p className="text-justify"><b>Pizza: </b> {Pedido.especialidad}</p>
          <p className="text-justify"><b>Num de Pizzas: </b> {Pedido.cantidad}</p>
          <p className="text-justify"><b>Forma de Pago: </b> {Pedido.tipoPago}</p>
          <p className="text-justify"><b>Total: </b>{Pedido.total}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail