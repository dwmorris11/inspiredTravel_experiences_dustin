import React from 'react';

const QuickViewDetails = ({details}) => (
  <div className="QuickViewDetailsIcons">
    <div className="QuickViewDetailsIconsRows">
      {details.map((detail) => (
        <QuickViewDetailsRow detail={detail}/> ))}
    </div>
  </div>
);

const QuickViewDetailsRow = ({detail}) => {
  let display;
  if(detail.hasOwnProperty('language')) {
    display = 'Languages Offered: ' + detail.language.join(', ');
  }
  if(detail.hasOwnProperty('vouchers_allowed')) {
    if(vouchers_allowed[0]) {
      display = 'Electronic Voucher Accepted';
    }
    if(vouchers_allowed[1]) {
      display = 'Paper Voucher Accepted';
    }
  }
  if(detail.hasOwnProperty('instant_confirmation')){
    if(detail.instant_confirmation){
      display = 'Instant Confirmation';
    }
  }
  if(detail.hasOwnProperty('cancellations')){
    if(detail.cancellations) {
      display = 'Free Cancellation up to 24 hours in advance';
    }
  }
  <div className="QuickViewDetailIcon">
    <span className="DetailIcon"></span> // TODO
      <div className="Detail">{display}
      </div>
  </div>
};

export default QuickViewDetails;
