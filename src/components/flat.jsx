import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { index, selectFlat } = this.props;

    selectFlat(index);
  }

  render() {
    const { flat, selected } = this.props;
    const { name, priceCurrency, price, imageUrl } = flat;

    return (
      <div className={`card ${selected ? 'active' : ''}`}
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})`}}
      >
        <div className="card-category">{`${priceCurrency} ${price}`}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;
