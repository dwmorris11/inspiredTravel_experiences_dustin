import React from 'react';

const QuickViewPrice = ({cost}) => (
  <div className="ui_column is-6 ">
  <div className="QuickViewHeaderPriceRow">
    <div className="QuickViewHeaderPrice">
      <span>from <span className="autoResize"><br />
        <span className="Price">{cost}</span>
      </span>
    </span>
  </div>
  <span><a href="">
    <button className="More Info">More Info</button>
  </a></span>
</div>
</div>

);

export default QuickViewPrice;