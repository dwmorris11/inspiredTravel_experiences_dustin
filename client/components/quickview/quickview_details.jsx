import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const QuickViewDetails = ({ details }) => {
  const detailArray = [];
  _.each(details, (value, detail) => {
    const obj = {};
    obj[detail] = value;
    detailArray.push(obj);
  });
  return (
    <div className="QuickViewDetailsIcons">
      <div className="QuickViewDetailsIconsRows">
        {_.map(detailArray, (detail) => (
          <QuickViewDetailsRow detail={detail} key={detail + Math.random()} />
        ))}
      </div>
    </div>
  );
};

QuickViewDetails.propTypes = {
  details: PropTypes.arrayOf(PropTypes.array).isRequired,
};

const QuickViewDetailsRow = ({ detail }) => {
  let display;
  let id;
  if (Object.prototype.hasOwnProperty.call(detail, 'languages')) {
    display = `Languages Offered: ${detail.languages.join(', ')}`;
    id = 'language';
  }
  if (Object.prototype.hasOwnProperty.call(detail, 'vouchers_allowed')) {
    if (detail.vouchers_allowed[0]) {
      display = 'Electronic Voucher Accepted';
      id = 'electronicVoucher';
    }
    if (detail.vouchers_allowed[1]) {
      display = 'Paper Voucher Accepted';
      id = 'paperVoucher';
    }
  }
  if (Object.prototype.hasOwnProperty.call(detail, 'instant_confirmation')) {
    if (detail.instant_confirmation) {
      display = 'Instant Confirmation';
      id = 'instantConfirmation';
    }
  }
  if (Object.prototype.hasOwnProperty.call(detail, 'cancellations')) {
    if (detail.cancellations) {
      display = 'Free Cancellation up to 24 hours in advance';
      id = 'cancellations';
    }
  }
  if (Object.prototype.hasOwnProperty.call(detail, 'tour_time')) {
    display = `${detail.tour_time.time} ${detail.tour_time.unit}`;
    id = 'time';
  }
  return (
    <div className="QuickViewDetailIcon">
      <span className="DetailIcon" />
      <div className="Detail" id={id}>
        {display}
      </div>
    </div>
  );
};

QuickViewDetailsRow.propTypes = {
  detail: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default QuickViewDetails;
