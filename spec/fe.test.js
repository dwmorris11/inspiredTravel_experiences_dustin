const puppeteer = require('puppeteer');
require("regenerator-runtime/runtime");
import Promise from 'bluebird';
import React from 'react';
import Toolbar from '../client/components/toolbar_module';
import Experience from '../client/components/experience_module';
import QuickView from '../client/components/quickview/quickview_module';
import QuickViewBody from '../client/components/quickview/quickview_body';
import QuickViewDetails from '../client/components/quickview/quickview_details';
import QuickViewHeader from '../client/components/quickview/quickview_header';
import QuickViewPrice from '../client/components/quickview/quickview_price';
import QuickViewContainer from '../client/components/quickview/quickview_container';
import Parent from '../client/components/parent_module';
import { data } from '../__mocks__/dataMock';
import App from '../client/components/app';
import Map from '../client/components/quickview/quickview_map';

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
      key={data.id + Math.random()}
      quickViewClick={() => {}}
      arrayposition={0}
      reviewCount={data.review_count}
      rating={data.rating}
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
  const wrapper = shallow(
    <QuickViewBody
     imageBaseUrl={imageBaseUrl}
     image={data.image}
     mapSource={data.quickview.map_address}
     overview={data.quickview.overview}
     details={data.quickview.details}
     quickViewClose={()=>{}}/>
  );

  it('Should have an image', () => {
    const imageUrl = imageBaseUrl + data.image;
    expect(wrapper.containsMatchingElement(<img src={imageUrl}/>)).toBe(true);
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

  // TODO check for icons

});

describe('QuickView Map Properties', ()=>{
  const wrapper = shallow(
    <Map mapSource={data.quickview.map_address} />
  );

  it('Should have a map', () => {
    expect(wrapper.containsMatchingElement(<img alt="map"/>)).toBe(true);
  })
});

describe('Quickview Header Properties', () => {
  const wrapper = shallow(
     <QuickViewHeader category={data.quickview.category} subtitle={data.quickview.subtitle}/>
   );

  it('Should have a category', () => {
    expect(wrapper.find('span').text()).toEqual(data.quickview.category);
  });

  it('Should have a subtitle', () => {
    expect(wrapper.find('.QuickViewSubtitle').text()).toEqual(data.quickview.subtitle);
  });

});

describe('QuickView Price Properties', () => {
  const wrapper = shallow(
    <QuickViewPrice cost={data.cost_unit.cost} />
  );

  it('Should have a cost', () => {
    expect(wrapper.find('.Price').text()).toEqual(('$' + data.cost_unit.cost.toString()));
  });

  it('Should have style div tags', () => {
    expect(wrapper.exists('.QuickViewHeaderPriceRow')).toBe(true);
    expect(wrapper.exists('.QuickViewHeaderPrice')).toBe(true);
    expect(wrapper.exists('.Price')).toBe(true);
  });

  it('Should have a more info button', ()=> {
    expect(wrapper.exists('button')).toBe(true);
    expect(wrapper.find('.Quick_More_Info').text()).toEqual('More Info');
  });

});

describe('QuickView Module Properties', () => {
  const imageBaseUrl = 'https://images-trip.s3.us-east-2.amazonaws.com/';
  const wrapper = mount(
    <QuickView experience={data}
    imageBaseUrl={imageBaseUrl}
    quickViewClose={()=>{}}
    />
  );

  it('Should contain a QuickViewContainer', () => {
    //expect(wrapper.find(QuickViewContainer).to.have.lengthOf(1)).toBe(true);
    expect(wrapper.props().imageBaseUrl).toEqual(imageBaseUrl);
    expect(wrapper.props().experience).toEqual(data);
  });
});

describe('Parent Module', () => {
  const wrapper = mount(
    <Parent experiences={[data, data]} imageBaseUrl = 'https://images-trip.s3.us-east-2.amazonaws.com/'
      seeMoreClick={()=>{}}
      quickViewClick={()=>{}}
    />
  );

  it('Should contain styling divsions', () => {
    expect(wrapper.exists('.Parent_Container')).toBe(true);
    expect(wrapper.exists('.Data_Container')).toBe(true);
    expect(wrapper.exists('.Outer_Data_Container')).toBe(true);
    expect(wrapper.exists('.Inner_Data_Container')).toBe(true);
    });

  it('Should render Experience divisions', () => {
    expect(wrapper.exists('.Experience_Container')).toBe(true);
    expect(wrapper.exists('.Description')).toBe(true);
    expect(wrapper.exists('.Footer_Container')).toBe(true);
  });

});

describe('Interactivity', () => {
  let browser;
  let page;
  beforeAll(async () => {
    try{
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3636/007');
    } catch (e) {
      console.log(e);
      return e;
    }
  });

  //afterAll(() => browser.close());

  it('should not have a QuickView open', (done) => {
    (async function () {
    try {
      await page.waitFor(1500);
      await page.waitForSelector('#a1');
      await page.focus('#a1');
      await page.waitForSelector('#b1');
      await page.focus('#b1');
      const quickView = await page.$('.QuickView');
      expect(quickView).not.toEqual('QuickView');
      expect(quickView).toEqual(null);
      done();
    } catch (error) {
      done(error);
    }
  })();
  });

  it('should have a QuickView open', (done) => {
    (async function () {
    try {
      await page.waitForSelector('#a1');
      await page.focus('#a1');
      await page.waitForSelector('#b1');
      await page.focus('#b1');
      await page.click('#b1');
      const quickView = await page.$eval('.QuickView', node => node.className);
      expect(quickView).toEqual('QuickView');
      done();
    } catch (error) {
      done(error);
    }
  })();
  });

  // it('should have a QuickView close', (done) => {
  //   (async function () {
  //     let content;
  //   try {
  //     content = await page.content();
  //     console.log(content);
  //     await page.waitForSelector('#exit');
  //     await page.on('load', page.screenshot({path: 'quickview.png'}));
  //     await page.click('#exit');
  //     const quickView = await page.$('.QuickView');
  //     expect(quickView).not.toEqual('QuickView');
  //     expect(quickView).toEqual(null);
  //     done();
  //   } catch (error) {
  //     done(error);
  //   }
  // })();
  // });

});
