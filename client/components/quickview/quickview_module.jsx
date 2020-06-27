import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import QuickViewContainer from './quickview_container';

class QuickView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: props.experience,
      imageBaseUrl: props.imageBaseUrl,
      mapSource: props.experience.quickview.map_address,
      quickViewClose: props.quickViewClose,
    };
  }

  render() {
    const {
      experience, imageBaseUrl, mapSource, quickViewClose,
    } = this.state;
    if (_.isEmpty(experience) || experience.quickview === undefined) {
      return ('');
    }
    return (
      <QuickViewContainer
        category={experience.quickview.category}
        subtitle={experience.quickview.subtitle}
        rating={experience.rating}
        reviewCount={experience.review_count}
        supplier={experience.quickview.supplier}
        cost={experience.cost_unit.cost}
        imageBaseUrl={imageBaseUrl}
        image={experience.image}
        mapSource={mapSource}
        overview={experience.quickview.overview}
        details={experience.quickview.details}
        quickViewClose={quickViewClose}
      />
    );
  }
}

QuickView.defaultProps = {
  imageBaseUrl: 'http',
  experience: {
    id: 3,
  },
};

QuickView.propTypes = {
  quickViewClose: PropTypes.func.isRequired,
  imageBaseUrl: PropTypes.string,
  experience: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    review_count: PropTypes.number.isRequired,
    cost_unit: PropTypes.shape({
      cost: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
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
        lng: PropTypes.number.isRequired,
      }),
    }),
  }),
};
export default QuickView;
