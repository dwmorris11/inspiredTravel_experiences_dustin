import React from 'react';
import PropTypes from 'prop-types';
import Circles from './circles';
import Heart from './heart';

const Experience = ({
  id, image, description, costUnit, quickViewClick, arrayposition, reviewCount, rating,
}) => (
  <div className="Experience_Container Experience_Container2" key={`${id}ec`}>
    <div className="Experience Experience2">
      <Heart />
      <div className="Photo">
        <img src={image} alt="" />
      </div>
      <div className="Description_Container">
        <div className="Description" id={`a${arrayposition.toString()}`}>
          <span className="Description_Text">{description}</span>
          <span className="Review" />
        </div>
      </div>
      <div className="Review_Container">
        <Circles rating={rating} />

        <span className="ReviewCount">
          {reviewCount}
          {' '}
          reviews
        </span>
      </div>
      <div className="Footer_Container">
        <div className="Cost_Container">
          <span className="Cost">
            $
            {costUnit.cost}
            {' '}
            per
            {' '}
            {costUnit.unit}
          </span>
        </div>
        <div className="More_Info">
          <button className="More_Info_Button" type="button">More Info</button>
        </div>
      </div>
      <div
        id={`b${arrayposition.toString()}`}
        className="QVButton"
        role="button"
        onClick={() => quickViewClick(arrayposition)}
        onKeyDown={() => quickViewClick(arrayposition)}
        tabIndex={-1 * arrayposition}
      >
        <div className="QuickView_Button_Container">
          <button className="QuickView_Button" type="button" arrayposition={arrayposition}>
            <span className="QuickView_Eye" arrayposition={arrayposition}>Quick View</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

Experience.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  arrayposition: PropTypes.number.isRequired,
  quickViewClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  costUnit: PropTypes.shape({
    cost: PropTypes.number,
    unit: PropTypes.string,
  }).isRequired,
};

export default Experience;
