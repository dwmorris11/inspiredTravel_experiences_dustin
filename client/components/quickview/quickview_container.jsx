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
    quickViewClose,
  },
) => (
  <div className="QuickView">
    <div className="QuickViewWhiteBox">
      <div className="QuickViewOverlay">
        <div className="QuickViewBox">
          <div className="QuickViewHeaderContainer">
            <div className="ui_multi">
              <div className="HeaderRow">
                <div className="ui_row">
                  <div>
                    <QuickViewHeader category={category} subtitle={subtitle} />
                  </div>
                </div>
                <div className="ui_row">
                  <div className="ui_rating">
                    <QuickViewRating
                      rating={rating}
                      reviewCount={reviewCount}
                      supplier={supplier}
                    />
                  </div>
                  <div className="ui_price">
                    <QuickViewPrice cost={cost} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <QuickViewBody
            imageBaseUrl={imageBaseUrl}
            image={image}
            mapSource={mapSource}
            overview={overview}
            details={details}
            quickViewClose={quickViewClose}
          />
        </div>
      </div>
    </div>
  </div>
);
QuickViewContainer.propTypes = {
  quickViewClose: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  supplier: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  imageBaseUrl: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  mapSource: PropTypes.objectOf(PropTypes.number).isRequired,
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
