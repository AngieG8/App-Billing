import React from 'react';

class BadgeForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Nueva Factura</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre Provedor/Empresa </label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.NombreProvedor}
            />
          </div>

          <div className="form-group">
            <label>Nit</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.Nit}
            />
          </div>

          <div className="form-group">
            <label>Valor a Pagar</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.Valor}
            />
          </div>

          <div className="form-group">
            <label>Modo de Pago</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.ModoPago}
            />
          </div>

          <div className="form-group">
            <label>Fecha de Pago</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.FechaPago}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
