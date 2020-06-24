import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import QuickViewContainer from './quickview_container';

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
        reviewCount={experiences.review_count}
        supplier={experiences.quickview.supplier}
        cost={experiences.cost_unit.cost}
        imageBaseUrl={imageBaseUrl}
        image={experiences.image}
        mapSource={mapSource}
        overview={experiences.quickview.overview}
        details={experiences.quickview.details}
      />
    );
  }
}

QuickView.defaultProps = {
  experiences: {
    id: 3
  }
}

QuickView.propTypes = {
  mapSource: PropTypes.string,
  imageBaseUrl: PropTypes.string,
  experiences: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    review_count: PropTypes.number.isRequired,
    cost_unit: PropTypes.shape({
      cost: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired
    }),
    link: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    quickview: PropTypes.shape({
      details: PropTypes.shape({
        tour_time: PropTypes.shape({
          time: PropTypes.number.isRequired,
          unit: PropTypes.string.isRequired,
        }),
        languages: PropTypes.arrayOf(PropTypes.string).isRequired,
        vouchers_allowed: PropTypes.arrayOf(PropTypes.bool).isRequired,
        instant_confirmation: PropTypes.bool.isRequired,
        cancellations: PropTypes.bool.isRequired,
      }),
      category: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      supplier: PropTypes.string.isRequired,
      map_address: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
      }),
    }),
  }),
};
export default QuickView;