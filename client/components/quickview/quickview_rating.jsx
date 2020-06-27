import React from 'react';
import PropTypes from 'prop-types';
import Circles from '../circles';

const QuickViewRating = ({ rating, reviewCount, supplier }) => (  // eslint-disable-line
  <div>
    <div className="QuickViewRating">
      <Circles rating={rating} />
      <span className="QuickViewReviewCount">
        {reviewCount}
        {' '}
        reviews
      </span>
    </div>
    <div className="QuickViewSupplier">
      By:
      {' '}
      <span><a href="" target="_blank" className="SupplierName">{supplier}</a></span>  {/* eslint-disable-line */}
    </div>
  </div>
);

QuickViewRating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  supplier: PropTypes.string.isRequired,
};

export default QuickViewRating;
