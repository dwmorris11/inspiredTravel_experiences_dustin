  import React from 'react';

  const QuickViewHeader = ({category, subtitle}) => (
    <div className="QuickViewColumn">
      <div className="QuickViewCategory">
        <span>{category}</span>
      </div>
      <div className="QuickViewSubtitle">{subtitle}
      </div>
    </div>
  );

  export default QuickViewHeader;