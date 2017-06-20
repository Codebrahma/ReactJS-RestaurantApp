import React, { PropTypes } from 'react';
import Image from './image';
import './../styles/productCard.scss';

/**
 * Renders product card
 *
 * @class      ProductCard (name)
 * @param      {Object}    props              The component properties
 * @param      {string}    props.imgSource    The image source url
 * @param      {string}    props.heading      The heading
 * @param      {string}    props.description  The description
 * @param      {string}    props.price        The price
 * @param      {function}  props.onClick      On click handler
 * @param      {function}  props.addToCart    Add to cart on click handler
 */
const ProductCard = ({ imgSource, heading, description, price, onClick, addToCart }) => (
  <div className="product-card">
    <div className="product-card--content">
      <Image
        className="product-card--content--thumb"
        src={imgSource}
        alt={heading}
        width="112px"
        height="105px"
        onClick={onClick}
      />
      <div className="product-card--content--summary">
        <h4
          onClick={onClick}
        >
          {heading}
        </h4>
        <p>{description}</p>
      </div>
    </div>
    <div className="product-card--actions">
      <div className="product-card--actions--price">
        <i className="fa fa-inr" aria-hidden="true"></i>
        <span className="product-card--actions--price--current">{price}</span>
      </div>
      <button onClick={addToCart}>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </button>
    </div>
  </div>
);

ProductCard.propTypes = {
  imgSource: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  addToCart: PropTypes.func,
};

export default ProductCard;
