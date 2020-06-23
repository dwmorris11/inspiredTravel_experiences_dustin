import React from 'react';

const QuickViewRating = ({rating, reviewCount, supplier}) => (
  <div className="QuickViewColumn">
    <div className="QuickViewRating">
      <span className="QuickViewBubbleRating">{rating}</span>
      <span className="QuickViewReviewCount">{reviewCount}</span>
    </div>
    <div className="QuickViewSupplier">
      By: <span><a href="" target="_blank" className="SupplierName">{supplier}</a></span>
    </div>
  </div>
);

export default QuickViewRating;