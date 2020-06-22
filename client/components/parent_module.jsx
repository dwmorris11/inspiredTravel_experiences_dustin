import React from 'react';
import Experience from './experience_module.jsx';

const Parent = ({experiences, imageBaseUrl}) => (
  <div className="Parent_Container">
    <div className="Data_Container">
      <div className="Outer_Data_Container">
        <div className="Inner_Data_Container">
          {experiences.map( (exp) => (
            <Experience
              cost={exp.cost}
              id={exp.id}
              image={imageBaseUrl + exp.image}
              description={exp.description}
              cost_unit={exp.cost_unit}
            />))}
        </div>
      </div>
    </div>
  </div>
)

export default Parent;