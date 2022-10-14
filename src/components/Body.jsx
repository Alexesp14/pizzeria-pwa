import React, { useState } from "react";
import Detail from "./Detail";
import { PedidoDefault, getPedido } from "./Pedido";

const Body = () => {

  const [PedidoState, setPedido] = useState(PedidoDefault)

  const generaPedido = (e) => {
    e.preventDefault();
    setPedido(getPedido(e.target));
    e.target.reset()
  };

  const cambiarEspecialidad = (e) => {
    Pedido.especialidad.value = (e.target.options[e.target.selectedIndex].text.split("-")[0].trim() +
    ` (${e.target.options[e.target.selectedIndex].text.split("-")[1].trim()})`)
  }

  return (
    <div className="row pb-5 mb-5">
      <div className="col-12 col-xl-9 py-2">
        <div className="card">
          <div className="card-header">
            <h5 className="text-center">Ordena Aqui</h5>
          </div>
          <div className="card-body">
            <form id="Pedido" onSubmit={generaPedido}>
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <label className="form-label">Elige tu Pizza</label>
                    <select
                      className="form-control"
                      name="precio"
                      id="precio"
                      onChange={cambiarEspecialidad}
                      required
                    >
                      <option value={""} hidden>Seleccione</option>
                      <option value={100}>Hawaiana - $100</option>
                      <option value={120}>Especial - $120</option>
                      <option value={150}>Vegetariana - $150</option>
                    </select>
                    <input type="text" name="especialidad" id="especialidad" hidden />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <label className="form-label">Cantidad de Pizzas</label>
                    <input
                      className="form-control"
                      type="number"
                      name="cantidad"
                      required
                      min={1}
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <label className="form-label">Forma de Pago</label>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="tipoPago"
                          value="1.10"
                          defaultChecked={true}
                        />
                        Tarjeta de Crédito
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="tipoPago"
                          value="1.20"
                        />
                        PayPal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <input className="form-control" type="text" name="nombre" required />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <label className="form-label">Teléfono</label>
                    <input className="form-control" type="text" name="telefono" required />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="form-group">
                    <label className="form-label">Dirección</label>
                    <input
                      className="form-control"
                      type="text"
                      name="direccion"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 mx-auto text-center my-2">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value={"Enviar Pedido"}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Detail Pedido={PedidoState} />
    </div>
  );
};

export default Body;