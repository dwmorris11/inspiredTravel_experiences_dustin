import React from 'react';
import Toolbar from '../client/components/toolbar_module.jsx';
import Experience from '../client/components/experience_module.jsx';
import QuickView from '../client/components/quickview/quickview_module.jsx';
import QuickViewBody from '../client/components/quickview/quickview_body.jsx';
import QuickViewDetails from '../client/components/quickview/quickview_details.jsx';
import { data } from '../__mocks__/dataMock.js';
import App from '../client/components/app.jsx';

describe('Toolbar Properties', () => {
  const wrapper = shallow(<Toolbar category={data.category} subtitle={data.subtitle} />);
  it('Should display a category', () => {
    expect(wrapper.find('.Experience_Category').text()).toEqual(expect.anything());
  });
  it('Should display a subtitle', () => {
    expect(wrapper.find('.Experience_Category_Subtitle').text()).toEqual(expect.anything());
  });
});

describe('Experience Properties', () => {
  const imageBaseUrl = 'https://images-trip.s3.us-east-2.amazonaws.com/';
  const wrapper = shallow(
    <Experience
      id={data.id}
      image={imageBaseUrl + data.image}
      description={data.description}
      costUnit={data.cost_unit}
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
});

describe('Quickview Body Properties', () => {
  const imageBaseUrl = 'https://images-trip.s3.us-east-2.amazonaws.com/';
  const mapSource ='klksdjf'; // TODO
  const wrapper = shallow(
    <QuickViewBody
     imageBaseUrl={imageBaseUrl}
     image={data.image}
     mapSource={mapSource}
     overview={data.quickview.overview}
     details={data.quickview.details}/>);

  it('Should have an image', () => {
    const imageUrl = imageBaseUrl + data.image;
    expect(wrapper.containsMatchingElement(<img src={imageUrl}/>)).toBe(true);
  });

  it('Should have a map', () => {
    expect(wrapper.containsMatchingElement(<img src={mapSource}/>)).toBe(true);
  });

  it('Should have an overview', () => {
    expect(wrapper.containsMatchingElement(<span>{data.quickview.overview}</span>)).toBe(true);
  });

  xit('Should have an exit button', () => {
    expect(wrapper.containsMatchingElement(<div class="QuickViewExitButton" role="button" tabindex="0"></div>)).toBe(true);
  });

});

describe('Quickview Details Properties', () => {
  const wrapper = mount(
     <QuickViewDetails details={data.quickview.details}/>
   );

  it('Should have the tour time', () => {
    expect(wrapper.find('#time').text()).toEqual('1 hours');
  });

  it('Should have languages', () => {
    expect(wrapper.find('#language').text()).toEqual('Languages Offered: in');
  });

  it('Should NOT have electronic vouchers', () => {
    expect(wrapper.exists('#electronicVoucher')).toBe(false);
  });

  it('Should have paper vouchers', () => {
    expect(wrapper.find('#paperVoucher').text()).toEqual('Paper Voucher Accepted');
  });

  it('Should NOT have instant confirmation', () => {
    expect(wrapper.exists('#instantConfirmation')).toBe(false);
  });

  it('Should have cancellations', () => {
    expect(wrapper.find('#cancellations').text()).toEqual('Free Cancellation up to 24 hours in advance');
  });

  // check for icons

});
