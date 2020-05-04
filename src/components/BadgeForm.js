import React from 'react';

class BadgeForm extends React.Component {
  handleClick = e => {
    console.log('Button was clicked');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Nombre Provedor/Empresa </label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Nit</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="Nit"
              value={this.props.formValues.Nit}
            />
          </div>

          <div className="form-group">
            <label>Valor a Pagar</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="Valor"
              value={this.props.formValues.Valor}
            />
          </div>

          <div className="form-group">
            <label>Modo de Pago</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="ModoPago"
              value={this.props.formValues.ModoPago}
            />
          </div>
          
          <div className="form-group">
            <label>Fecha de Pago</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="date"
              name="FechaFactura"
              value={this.props.formValues.FechaFactura}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
