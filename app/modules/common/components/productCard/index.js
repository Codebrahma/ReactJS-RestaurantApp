import React, { PropTypes } from 'react';
import { map } from 'lodash';
import Image from './../image';
import Divider from './../divider';
import Link from './../Link';
import Rating from './../rating';
import './styles.scss';

/**
 * Renders product card
 *
 * @class      ProductCard (name)
 * @param      {Object}    props                  The component properties
 * @param      {string}    props.imgSource        The image source URL
 * @param      {string}    props.title            The title
 * @param      {string}    props.subtitle         The subtitle
 * @param      {string}    props.genre            The genre
 * @param      {string}    props.caption          The caption
 * @param      {object}    props.details          The product details
 * @param      {number}    props.rating           The product average rating
 * @param      {number}    props.votesCount       The product average rating
 * @param      {number}    props.reviewsCount     The product average rating
 * @param      {function}  props.onImageClick     Image on click handler
 * @param      {function}  props.onTitleClick     Title on click handler
 * @param      {function}  props.onSubtitleClick  Subtitle on click handler
 * @param      {function}  props.onReviewClick    Review on click handler
 * @param      {function}  props.onGenreClick     Genre on click handler
 */
const ProductCard = ({
  imgSource,
  title,
  subtitle,
  genre,
  caption,
  details,
  rating,
  votesCount,
  reviewsCount,
  onImageClick,
  onTitleClick,
  onSubtitleClick,
  onReviewClick,
  onGenreClick,
}) => (
  <div className="product-card">
    <div className="product-card--content">
      <Image
        className="product-card--content--thumb"
        src={imgSource}
        alt={title}
        width="112px"
        height="105px"
        onClick={onImageClick}
      />
      <div className="product-card--content--summary">
        <div className="title-wrapper">
          {genre && <Link
            className="genre uppercase"
            onClick={onGenreClick}
          >{genre}</Link>}
          <Link
            className="title bold"
            onClick={onTitleClick}
          >{title}</Link>
          {subtitle && <Link
            className="subtitle bold"
            onClick={onSubtitleClick}
          >{subtitle}</Link>}
          <p className="caption">{caption}</p>
        </div>
        <div className="rating-wrapper">
          {rating && <Rating rating={rating} />}
          {votesCount && <div className="rating-count">{votesCount} votes</div>}
          {reviewsCount && <Link className="rating-count">{reviewsCount} reviews</Link>}
        </div>
      </div>
    </div>
    <Divider />
    {
      map(details, (feature, featureTitle) => (
        <div className="product-card--detail" key={featureTitle}>
          <div className="uppercase truncate">{featureTitle}:</div>
          <div className="truncate">{feature}</div>
        </div>
      ))
    }
  </div>
);

ProductCard.propTypes = {
  imgSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  details: PropTypes.object,
  rating: PropTypes.number,
  votesCount: PropTypes.number,
  reviewsCount: PropTypes.number,
  onImageClick: PropTypes.func,
  onTitleClick: PropTypes.func,
  onSubtitleClick: PropTypes.func,
  onReviewClick: PropTypes.func,
  onGenreClick: PropTypes.func,
};

export default ProductCard;
