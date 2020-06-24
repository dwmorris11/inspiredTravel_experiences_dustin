import React from 'react';
import PropTypes from 'prop-types';

const QuickViewPrice = ({ cost }) => (
  <div className="ui_column is-6 ">
    <div className="QuickViewHeaderPriceRow">
      <div className="QuickViewHeaderPrice">
        <span>
          from
          <span className="autoResize">
            <br />
            <span className="Price">{cost}</span>
          </span>
        </span>
      </div>
      <span>
        <button className="More_Info" type="button">More Info</button>
      </span>
    </div>
  </div>

);

QuickViewPrice.propTypes = {
  cost: PropTypes.number.isRequired,
};

export default QuickViewPrice;
