import React from 'react';

const Toolbar = ({category, subtitle}) => (
  <div className='Toolbar'>
    <span className='Tab'>
      <div className='Experience_Category'>
      {category}
      </div>
      <div className='Experience_Category_Subtitle'>{subtitle}</div>
    </span>
  </div>
);

export default Toolbar;