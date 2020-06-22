import React from 'react';
import Toolbar from '../client/components/toolbar_module.jsx';
import Experience from '../client/components/experience_module.jsx';
import { data } from '../__mocks__/dataMock.js';
import App from '../client/components/app.jsx';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

describe('Toolbar Properties', () => {
  const wrapper = shallow(<Toolbar category={data.category} subtitle={data.subtitle} />);
  it('Should display a category', ()=>{
    expect(wrapper.find('.Experience_Category').text()).toEqual(expect.anything());
  });
  it('Should display a subtitle', ()=>{
    expect(wrapper.find('.Experience_Category_Subtitle').text()).toEqual(expect.anything());
  });
});

describe('Experience Properties', ()=> {
  const imageBaseUrl = 'https://images-trip.s3.us-east-2.amazonaws.com/';
  const wrapper = shallow(
    <Experience
    cost={data.cost}
    id={data.id}
    image={imageBaseUrl + data.image}
    description={data.description}
    cost_unit={data.cost_unit}
    />);
  it('Should have an image', () => {
    const image = imageBaseUrl + data.image;
    expect(wrapper.containsMatchingElement(<img src={image}/>)).toBe(true);
  });

  it('Should have a description', () => {
    expect(wrapper.contains(data.description)).toBe(true);
  });

  it('Should have a cost', () => {
    expect(wrapper.contains(data.cost_unit.cost)).toBe(true);
    expect(wrapper.contains(data.cost_unit.unit)).toBe(true);
  });

  it('Should have a MORE INFO button', () => {
    expect(wrapper.containsMatchingElement(<button>More Info</button>)).toBe(true);
  });

  it('Should have a QuickView button', () => {
    expect(wrapper.containsMatchingElement(<button><span>Quick View</span></button>)).toBe(true);
  });
})