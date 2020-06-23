import React from 'react';
import QuickViewDetails from './quickview_details.jsx';

const QuickViewBody = ({imageBaseUrl, image, mapSource, overview, details}) => (
<div className="QuickViewBodyContainer">
  <div className="ui_columns ">
    <div className="ui_column is-6 ">
      <img className="QuickViewImage" src={imageBaseUrl + image} />
      <span data-test-target="staticMapSnapshot">
        <img alt="" className="QuickViewImage" src={mapSource} />
      </span>
    </div>
    <div className="ui_column is-6 ">
      <div className="ui_header">Overview</div>
        <div className="QuickViewBodyOverview">
          <span>{overview}</span>
        </div>
        <QuickViewDetails details={details}/>
    </div>
  </div>
  <div class="QuickViewExitButton" role="button" tabindex="0">
  </div>
</div>
);

export default QuickViewBody;