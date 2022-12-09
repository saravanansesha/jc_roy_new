import React from "react";

import IntlMessages from "util/IntlMessages";

const TestingStandard = ({match}) => {
  return (
    <div>
      <h2 className="title gx-mb-4"><IntlMessages id="sidebar.samplePage"/></h2>

      <div className="gx-d-flex justify-content-center">
        <h4>Testing Standard</h4>
      </div>
 
    </div>
  );
};
    
export default TestingStandard;
