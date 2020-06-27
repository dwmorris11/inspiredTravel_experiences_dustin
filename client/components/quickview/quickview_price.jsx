import React from 'react';
import PropTypes from 'prop-types';

const QuickViewPrice = ({ cost }) => (
  <div>
    <div className="QuickViewHeaderPriceRow">
      <div className="QuickViewHeaderPrice">
        <span>
          from
          <br />
          <span className="Price">
            $
            {cost}
          </span>
        </span>
      </div>
      <span>
        <button className="Quick_More_Info" type="button">More Info</button>
      </span>
    </div>
  </div>
);

QuickViewPrice.propTypes = {
  cost: PropTypes.number.isRequired,
};

export default QuickViewPrice;
