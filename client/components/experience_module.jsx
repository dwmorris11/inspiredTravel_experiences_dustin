import React from 'react';

const Experience = ({id, image, description, cost_unit}) => (
  <div className='Experience_Container Experience_Container2' id={id} key={id+'ec'}>
    <div className='Experience Experience2'>
      <div className='Photo'><a><img src={image}/></a>
      </div>
    <div className='Description_Container'>
      <div className='Description'>
        <a className='Review_Link'><span id='Description_Text'>{description}</span></a>
        <span className='Review'></span>
      </div>
    </div>
  <a>
    <div className='Review_Container'>
      <span className='Review_Circles'></span>
      <span className='Review_Count'></span>
    </div></a>
    <div className='Footer_Container'>
      <div className='Cost_Container'>
        <span className='Cost'>${cost_unit.cost} per {cost_unit.unit}</span>
      </div>
      <div className='More_Info'>
        <button className='More_Info_Button'>More Info</button>
      </div>
    </div>
    <div className='QuickView'>
      <div className='QuickView_Button_Container'>
        <div>
          <button className='QuickView_Button'>
            <span className='QuickView_Eye'>Quick View</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>
);

export default Experience;
