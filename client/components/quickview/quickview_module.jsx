import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import QuickViewContainer from './quickview_container.jsx';

class QuickView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // visible: props.visbility,
      experiences: props.experiences,
      imageBaseUrl: props.imageBaseUrl,
      mapSource: '',
    };
  }

  render() {
    const { experiences, imageBaseUrl, mapSource } = this.state;
    if (_.isEmpty(experiences) || experiences.quickview === undefined) {
      return ('');
    }
    return (
      <QuickViewContainer
        category={experiences.quickview.category}
        subtitle={experiences.quickview.subtitle}
        rating={experiences.rating}
        reviewCount={experiences.reviewCount}
        supplier={experiences.quickview.supplier}
        cost={experiences.cost_unit.cost}
        imageBaseUrl={imageBaseUrl}
        image={experiences.image}
        mapSource={mapSource}
        overview={experiences.overview}
        details={experiences.quickview.details}
      />
    );
  }
}

QuickView.propTypes = {
  experiences: PropTypes.objectOf(PropTypes.object).isRequired,
  imageBaseUrl: PropTypes.string.isRequired,
};
export default QuickView;
