import React from 'react';

import './styles/Badge.css';


class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
         <h1> Registro de Factura</h1>
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>Registre sus Provedores con los datos de facturacion
            {this.props.twitter}</div>
        </div>

        <div className="Badge__footer">Easy Billing</div>
      </div>
    );
  }
}

export default Badge;
