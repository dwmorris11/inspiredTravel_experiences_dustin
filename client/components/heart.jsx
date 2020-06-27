import React from 'react';

const Heart = () => (
  <div className="OuterHeartContainer">
    <div className="InnerHeartContainer">
      <span className="CircleHeart">
        <span className="CircleEmpty">
          <span className="HeartEmpty" />
        </span>
        <span className="CircleFull">
          <span className="HeartFull" />
        </span>
      </span>
    </div>
  </div>
);

export default Heart;
