import React from 'react';
import _ from 'lodash';
import QuickViewContainer from './quickview_container.jsx';

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
    if(_.isEmpty(this.state.experiences) || this.state.experiences.quickview === undefined) {
      return ('');
    }
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
