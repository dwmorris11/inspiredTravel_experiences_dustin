import React from 'react';
import PropTypes from 'prop-types';
import QuickViewHeader from './quickview_header.jsx'; // eslint-disable-line
import QuickViewRating from './quickview_rating.jsx'; // eslint-disable-line
import QuickViewPrice from './quickview_price.jsx'; // eslint-disable-line
import QuickViewBody from './quickview_body.jsx'; // eslint-disable-line

const QuickViewContainer = (
  {
    category,
    subtitle,
    rating,
    reviewCount,
    supplier,
    cost,
    imageBaseUrl,
    image,
    mapSource,
    overview,
    details,
  },
) => (
  <div>
    <QuickViewHeader category={category} subtitle={subtitle} />
    <QuickViewRating rating={rating} reviewCount={reviewCount} supplier={supplier} />
    <QuickViewPrice cost={cost} />
    <QuickViewBody
      imageBaseUrl={imageBaseUrl}
      image={image}
      mapSource={mapSource}
      overview={overview}
      detail={details}
    />
  </div>
);
QuickViewContainer.propTypes = {
  category: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  supplier: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  imageBaseUrl: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  mapSource: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default QuickViewContainer;
