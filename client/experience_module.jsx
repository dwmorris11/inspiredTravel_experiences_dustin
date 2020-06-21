import React from 'react';

const Experience = ({id, image, description, cost_unit}) => (
  <div className='Experience_Container Experience_Container2' id={id} key={id+'ec'}>
    <div className='Experience Experience2'>
      <div className='Photo'><a><img src={image} width="325px" height="225px"/></a>
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
          <div>
            <button className='QuickView_Button'>
              <span className='QuickView_Eye'>Quick View</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
);

export default Experience;

// const experiencesSchema = new mongoose.Schema({
//   id: { type: Number, unique: true },
//   heart: Boolean,
//   image: String,
//   description: String,
//   rating: Number,
//   cost_unit: {
//     cost: Number,
//     unit: String,
//   },
//   link: String,
//   popularity: Number,
//   quickview: quickViewSchema,
// }, {
//   timestamps: true,
// });

// id: { type: Number, unique: true },
// category: String,
// overview: String,
// languages: Array,
// vouchers_allowed: Array,
// tour_time: {
//   time: Number,
//   unit: String,
// },
// instant_confirmation: Boolean,
// map_address: {
//   lat: Number,
//   lng: Number,
// },