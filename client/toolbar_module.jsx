import React from 'react';

const Toolbar = ({category, subtitle}) => (
  <div className='Toolbar'>
    <div className='Tab'>
      <span className='Experience_Category'>{category}</span>
      <span className='Experience_Category_Subtitle'>{subtitle}</span>
    </div>
  </div>
);

export default Toolbar;