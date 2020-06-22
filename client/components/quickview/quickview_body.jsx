import React from 'react';
import QuickViewDetails from './quickview_details';

const QuickViewBody = ({imageBaseUrl, image, mapSource, overview}) => (
<div className="QuickViewBodyContainer">
  <div className="ui_columns ">
    <div className="ui_column is-6 ">
      <img src={imageBaseUrl + image} className="QuickViewImage" />
      <span data-test-target="staticMapSnapshot">
        <img alt="" className="QuickViewImage" src={mapSource} />
      </span>
    </div>
    <div className="ui_column is-6 ">
      <div className="ui_header">Overview</div>
        <div className="QuickViewBodyOverview">
          <span>{overview}</span>
        </div>
        <QuickViewDetails />
    </div>
  </div>
  <div class="QuickViewExitButton" role="button" tabindex="0">
  </div>
</div>
);

export default QuickViewBody;