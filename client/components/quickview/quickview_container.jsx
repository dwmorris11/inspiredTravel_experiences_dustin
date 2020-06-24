import React from 'react';
import PropTypes from 'prop-types';
import QuickViewHeader from './quickview_header';
import QuickViewRating from './quickview_rating';
import QuickViewPrice from './quickview_price';
import QuickViewBody from './quickview_body';

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
      details={details}
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
  details: PropTypes.shape({
    languages: PropTypes.arrayOf(PropTypes.string),
    tour_time: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    vouchers_allowed: PropTypes.arrayOf(PropTypes.bool),
    instant_confirmation: PropTypes.bool,
    cancellations: PropTypes.bool,
  }).isRequired,
  };

export default QuickViewContainer;
