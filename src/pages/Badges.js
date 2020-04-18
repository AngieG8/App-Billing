import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('3. componentDidMount()');

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Mision Servir SAS',
            lastName: '',
            FechaFactura: '01/05/2020',
            DiasVencer: '12',
            Valor: '$1.200.000',
            avatarUrl:
              'https://gravatar.com/avatar/5fefeaf39d4c520912b836080cb22c72?s=400&d=mp&r=x',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Document',
            lastName: '',
            FechaFactura: '01/05/2020',
            DiasVencer: '2',
            Valor: '$2.321.654',
            avatarUrl:
              'https://gravatar.com/avatar/5fefeaf39d4c520912b836080cb22c72?s=400&d=mp&r=x',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Mensajeria Express',
            lastName: '',
            FechaFactura: '01/05/2020',
            DiasVencer: '12',
            Valor: '$8.321.120',
            avatarUrl:
              'https://gravatar.com/avatar/5fefeaf39d4c520912b836080cb22c72?s=400&d=mp&r=x',
          },
        ],
      });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('5. componentDidUpdate()');
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log('6. componentWillUnmount');
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('2/4. render()');
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
            <h1>Billing</h1>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Billing
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
