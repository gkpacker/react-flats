import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  cardStyle(imageUrl) {
    return ({
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`
    });
  }

  const handleClick = () {
    this.setState({ clicked: true });
  }

  render() {
    const { name, imageUrl, lat, lng, priceCurrency, price } = this.props;

    return (
      <div onClick={this.handleClick} className="card" style={this.cardStyle(imageUrl)}>
        <div className="card-category">{`${priceCurrency} ${price}`}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
