import React from 'react';
import PropTypes from 'prop-types';

const QuickViewHeader = ({ category, subtitle }) => (
  <div>
    <div className="ui_header.h4">
      <span>{category}</span>
    </div>
    <div className="QuickViewSubtitle">
      {subtitle}
    </div>
  </div>
);

QuickViewHeader.propTypes = {
  category: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default QuickViewHeader;
