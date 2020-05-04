import React from 'react';

import './styles/Badge.css';

import Gravatar from './Gravatar';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
        <h2>
           Registered Information
          </h2>
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.Nit}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.Valor}</h3>
          <div>{this.props.FechaFactura}</div>
        </div>

        <div className="Badge__footer">
    SUCCESSFUL RECORDED INVOICE</div>
      </div>
    );
  }
}

export default Badge;
