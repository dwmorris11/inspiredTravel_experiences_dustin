import React from 'react';
import QuickViewContainer from './quickview_container';

class QuickView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visbility,
      experiences: props.experiences,
      imageBaseUrl: props.imageBaseUrl,
      mapSource: ''
    };
  }

  render() {
    return (
      <QuickViewContainer
        category={this.state.experiences.quickview.category}
        subtitle ={this.state.experiences.quickview.subtitle}
        rating={this.state.experiences.rating}
        reviewCount={this.state.experiences.reviewCount}
        supplier={this.state.experiences.quickview.supplier}
        cost={this.state.experiences.cost_unit.cost}
        imageBaseUrl={this.state.imageBaseUrl}
        image={this.state.experiences.image}
        mapSource={this.state.mapSource}
        overview={this.state.experiences.overview}
        details={this.state.experiences.quickview.details}
       />
    )
  }
}

export default QuickView;

id: { type: Number, unique: true },
category: String,
subtitle: String,
overview: String,
languages: Array,
vouchers_allowed: Array,
cancellations: Boolean,
supplier: String,
tour_time: {
  time: Number,
  unit: String,
},
instant_confirmation: Boolean,
map_address: {
  lat: Number,
  lng: Number,
},
});
