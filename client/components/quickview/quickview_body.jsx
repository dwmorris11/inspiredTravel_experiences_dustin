import React from 'react';
import PropTypes from 'prop-types';
import QuickViewDetails from './quickview_details';
import Map from './quickview_map';

const QuickViewBody = ({
  imageBaseUrl, image, mapSource, overview, details, quickViewClose,
}) => (
  <div className="QuickViewBodyContainer">
    <div className="ui_columns ui_multi">
      <div className="QuickViewImage ui_column6">
        <img src={imageBaseUrl + image} alt="" />
        <div className="ui_column6">
          <div className="Map QuickViewImage">
            <Map mapSource={mapSource} />
          </div>
        </div>
      </div>
      <div className="ui_column6 ui_column">
        <div className="ui_header">Overview</div>
        <div className="QuickViewBodyOverview">
          <span>{overview}</span>
        </div>
        <QuickViewDetails details={details} />
      </div>
    </div>
    <div
      className="QuickViewExitButton"
      role="button"
      tabIndex={0}
      onClick={quickViewClose}
      onKeyDown={quickViewClose}
      aria-label="Exit"
    />
  </div>
);

QuickViewBody.propTypes = {
  quickViewClose: PropTypes.func.isRequired,
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

export default QuickViewBody;
