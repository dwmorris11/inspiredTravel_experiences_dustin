import React from 'react';
import PropTypes from 'prop-types';
import QuickViewDetails from './quickview_details';

const QuickViewBody = ({
  imageBaseUrl, image, mapSource, overview, details,
}) => (
  <div className="QuickViewBodyContainer">
    <div className="ui_columns ">
      <div className="ui_column is-6 ">
        <img className="QuickViewImage" src={imageBaseUrl + image} alt="" />
        <span data-test-target="staticMapSnapshot">
          <img alt="" className="QuickViewImage" src={mapSource} />
        </span>
      </div>
      <div className="ui_column is-6 ">
        <div className="ui_header">Overview</div>
        <div className="QuickViewBodyOverview">
          <span>{overview}</span>
        </div>
        <QuickViewDetails details={details} />
      </div>
    </div>
    {/* <div className="QuickViewExitButton" role="button" tabIndex="0" /> */}
  </div>
);

QuickViewBody.propTypes = {
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

export default QuickViewBody;
