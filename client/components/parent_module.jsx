import React from 'react';
import PropTypes from 'prop-types';
import Experience from './experience_module';

const Parent = ({
  experiences, imageBaseUrl, quickViewClick, seeMoreClick,
}) => {
  let arrayposition = -1;
  let position = -1;
  return (
    <div className="Parent_Container">
      <div className="Data_Container">
        <div className="Outer_Data_Container">
          <div className="Inner_Data_Container">
            { experiences.map((exp) => {
              arrayposition += 1;
              if (arrayposition > 3) {
                return; // eslint-disable-line
              }
              return ( // eslint-disable-line
                <Experience
                  id={exp.id}
                  image={imageBaseUrl + exp.image}
                  description={exp.description}
                  costUnit={exp.cost_unit}
                  key={exp.id + Math.random()}
                  quickViewClick={quickViewClick}
                  arrayposition={arrayposition}
                  reviewCount={exp.review_count}
                  rating={exp.rating}
                />
              );
            })}
          </div>
          <div className="OverflowOuter">
            <div className="InnerOverflowContainer">
              <div className="Inner_Data_Container">
                { experiences.map((exp) => {
                  position += 1;
                  if (position < 4) {
                    return;  // eslint-disable-line
                  }
                  return ( // eslint-disable-line
                    <Experience
                      id={exp.id}
                      image={imageBaseUrl + exp.image}
                      description={exp.description}
                      costUnit={exp.cost_unit}
                      key={exp.id + Math.random()}
                      quickViewClick={quickViewClick}
                      arrayposition={position}
                      reviewCount={exp.review_count}
                      rating={exp.rating}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="SeeMore" role="button" onClick={seeMoreClick} onKeyDown={seeMoreClick} tabIndex={-1}> See More </div>
        </div>
      </div>
    </div>
  );
};
Parent.propTypes = {
  seeMoreClick: PropTypes.func.isRequired,
  quickViewClick: PropTypes.func.isRequired,
  experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
  imageBaseUrl: PropTypes.string.isRequired,
};
export default Parent;
