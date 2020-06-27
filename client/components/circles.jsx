import React from 'react';

const Circles = ({ rating }) => { // eslint-disable-line
  if (rating === 1) {
    return (
      <span className="Review_Circles">&#xea55;&#xea56;&#xea56;&#xea56;&#xea56;</span>
    );
  }
  if (rating === 2) {
    return (
      <span className="Review_Circles">&#xea55;&#xea55;&#xea56;&#xea56;&#xea56;</span>
    );
  }
  if (rating === 3) {
    return (
      <span className="Review_Circles">&#xea55;&#xea55;&#xea55;&#xea56;&#xea56;</span>
    );
  }
  if (rating === 4) {
    return (
      <span className="Review_Circles">&#xea55;&#xea55;&#xea55;&#xea55;&#xea56;</span>
    );
  }
  if (rating === 5) {
    return (
      <span className="Review_Circles">&#xea55;&#xea55;&#xea55;&#xea55;&#xea55;</span>
    );
  }
};

export default Circles;
