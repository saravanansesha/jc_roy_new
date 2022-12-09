import React from "react";
import {Link,useLocation} from "react-router-dom";
import IntlMessages from "util/IntlMessages";
import BreadCrumb from "../../components/BreadCrumbs"
const SamplePage = () => {
  return (
    <div>
      {/* <div className="bread_crumb">
      <i className="icon icon-menu-right"/>Home<i className="icon icon-menu-right"/>Settings
      </div> */}
<BreadCrumb> <i className="icon icon-menu-right"/> <Link to="/sample">Home</Link>  </BreadCrumb>
      <h2 className="title gx-mb-4"><IntlMessages id="sidebar.samplePage"/></h2>

      <div className="gx-d-flex justify-content-center">
        <h4>Start building your app. Happy Coding!</h4>
      </div>

    </div>
  );
};
    
export default SamplePage;
