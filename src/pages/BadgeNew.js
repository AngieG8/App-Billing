import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state = {
    form: {
      
      NombreProvedor: '',
      Nit:'',
      Valor: '',
      ModoPago: '',
      FechaPago: '',
      Direccion: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
         
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                NombreProvedor={this.state.form.NombreProvedor}
                Nit={this.state.form.Nit}
                Valor={this.state.form.Valor}
                ModoPago={this.state.form.ModoPago}
                FechaPago={this.state.form.FechaPago}
                Direccion={this.state.form.Direccion}
                avatarUrl="https://gravatar.com/avatar/bf1a35f3682f6b57db93d404b56c0417?s=400&d=mp&r=x"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
