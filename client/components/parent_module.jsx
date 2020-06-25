import React from 'react';
import PropTypes from 'prop-types';
import Experience from './experience_module';

const Parent = ({ experiences, imageBaseUrl, quickViewClick }) => (
  <div className="Parent_Container">
    <div className="Data_Container">
      <div className="Outer_Data_Container">
        <div className="Inner_Data_Container">
          {experiences.map((exp) => (
            <Experience
              id={exp.id}
              image={imageBaseUrl + exp.image}
              description={exp.description}
              costUnit={exp.cost_unit}
              key={exp.id + Math.random()}
              quickViewClick={quickViewClick}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
Parent.propTypes = {
  quickViewClick: PropTypes.func.isRequired,
  experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageBaseUrl: PropTypes.string.isRequired,
};
export default Parent;
