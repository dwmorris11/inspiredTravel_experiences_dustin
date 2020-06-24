import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ category, subtitle }) => (
  <div className="Toolbar">
    <span className="Tab">
      <div className="Experience_Category">
        {category}
      </div>
      <div className="Experience_Category_Subtitle">{subtitle}</div>
    </span>
  </div>
);
Toolbar.propTypes = {
  category: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default Toolbar;
