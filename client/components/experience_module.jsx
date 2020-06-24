import React from 'react';
import PropTypes from 'prop-types';

const Experience = ({
  id, image, description, costUnit,
}) => (
  <div className="Experience_Container Experience_Container2" id={id} key={`${id}ec`}>
    <div className="Experience Experience2">
      <div className="Photo">
        <img src={image} alt="" />
      </div>
      <div className="Description_Container">
        <div className="Description">
          <span id="Description_Text">{description}</span>
          <span className="Review" />
        </div>
      </div>
      <div className="Review_Container">
        <span className="Review_Circles" />
        <span className="Review_Count" />
      </div>
      <div className="Footer_Container">
        <div className="Cost_Container">
          <span className="Cost">
            $
            {costUnit.cost}
            {' '}
            per
            {costUnit.unit}
          </span>
        </div>
        <div className="More_Info">
          <button className="More_Info_Button" type="button">More Info</button>
        </div>
      </div>
      <div className="QuickView">
        <div className="QuickView_Button_Container">
          <div>
            <button className="QuickView_Button" type="button">
              <span className="QuickView_Eye">Quick View</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Experience.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  costUnit: PropTypes.shape({
    cost: PropTypes.number,
    unit: PropTypes.string,
  }).isRequired,
};

export default Experience;
