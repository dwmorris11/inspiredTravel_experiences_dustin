import React from 'react';
import QuickViewHeader from './quickview_header.jsx';
import QuickViewRating from './quickview_rating.jsx';
import QuickViewPrice from './quickview_price.jsx';
import QuickViewBody from './quickview_body.jsx';

const QuickViewContainer = (
  {category,
    subtitle,
    rating,
    reviewCount,
    supplier,
    cost,
    imageBaseUrl,
    image,
    mapSource,
    overview
  }) => (
  <QuickViewHeader category={category} subtitle={subtitle} />
  <QuickViewRating rating={rating} reviewCount={reviewCount} supplier={supplier}/>
  <QuickViewPrice cost={cost}/>
  <QuickViewBody imageBaseUrl={imageBaseUrl} image={image} mapSource={mapSource}, overview={overview}/>
);

export default QuickViewContainer;