/**
 * heading: default heading for the card
 * imgSource: to display basic image in the card, optional
 * description: default description for the card, optional
 * overrideStyles: (boolean): to override default styles, import user styles in req files, optional
 * onClickHandler: (function): attach onClick event handler to the component, optional
 */
import React, { PropTypes } from 'react';

const styles = {
  simpleCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
  },
  cardSummary: {
    width: '100%',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
};

const SimpleCard = ({ imgSource, heading, description, overrideStyles, onClickHandler }) => (
  <div
    className="simple-card-wrapper"
    {...!overrideStyles && { style: styles.simpleCardWrapper }}
    {...onClickHandler && { onClick: onClickHandler }}
  >
    {imgSource &&
      <img src={imgSource} alt={heading} className="card-image" />
    }
    <div
      className="card-summary"
      {...!overrideStyles && { style: styles.cardSummary }}
    >
      <h4 className="card-heading">{heading}</h4>
      {description &&
        <p className="card-description">{description}</p>
      }
    </div>
  </div>
);

SimpleCard.propTypes = {
  imgSource: PropTypes.string,
  description: PropTypes.string,
  overrideStyles: PropTypes.bool,
  heading: PropTypes.string,
  onClickHandler: PropTypes.func,
};

SimpleCard.defaultProps = {
  overrideStyles: false,
  heading: 'Default Card Heading',
};

export default SimpleCard;
