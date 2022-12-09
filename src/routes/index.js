import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage'))}/>
      <Route path={`${match.url}testing_standard`} component={asyncComponent(() => import('./Testing_Standard'))}/>
      <Route path={`${match.url}special_testing_standard`} component={asyncComponent(() => import('./Special_Testing_Standard'))}/>
      <Route path={`${match.url}design_standard`} component={asyncComponent(() => import('./Design_Standard'))}/>
      <Route path={`${match.url}Model_Number`} component={asyncComponent(() => import('./Model_number'))}/>
      <Route path={`${match.url}product_type`} component={asyncComponent(() => import('./Product_Type'))}/>
      <Route path={`${match.url}settings_components`} component={asyncComponent(() => import('./Settings_components'))}/>
      <Route path={`${match.url}product_components_map`} component={asyncComponent(() => import('./Product_components_map'))}/>

      <Route path={`${match.url}Size`} component={asyncComponent(() => import('./Size'))}/>
      <Route path={`${match.url}Bore`} component={asyncComponent(() => import('./Bore'))}/>
      <Route path={`${match.url}Class_Ratings`} component={asyncComponent(() => import('./Class_Ratings'))}/>
      <Route path={`${match.url}Working_Pressure`} component={asyncComponent(() => import('./Working_Pressure'))}/>
      <Route path={`${match.url}End_Connection_Types`} component={asyncComponent(() => import('./End_Connection_Types'))}/>
      <Route path={`${match.url}Operator_Types`} component={asyncComponent(() => import('./Operator_Types'))}/>

      <Route path={`${match.url}General_NDE_Settings`} component={asyncComponent(() => import('./General_NDE_Settings'))}/>
      <Route path={`${match.url}Ultrasonic_Test`} component={asyncComponent(() => import('./Ultrasonic_Test'))}/>
      <Route path={`${match.url}Visual_Test`} component={asyncComponent(() => import('./Visual_Test'))}/>
      <Route path={`${match.url}Penetrant_Test`} component={asyncComponent(() => import('./Penetrant_Test'))}/>
      <Route path={`${match.url}Magnetic_Test`} component={asyncComponent(() => import('./Magnetic_Test'))}/>
      <Route path={`${match.url}Positive_Material_Identification`} component={asyncComponent(() => import('./Positive_Material_Identification'))}/>


      <Route path={`${match.url}Basic_Settings`} component={asyncComponent(() => import('./Basic_Settings'))}/>
      <Route path={`${match.url}Audit`} component={asyncComponent(() => import('./Audit'))}/>
      <Route path={`${match.url}Material_Configuration`} component={asyncComponent(() => import('./Material_Configuration'))}/>

      <Route path={`${match.url}Manage_User_Roles`} component={asyncComponent(() => import('./Manage_User_Roles'))}/>
      <Route path={`${match.url}Product_Group`} component={asyncComponent(() => import('./Product_Group'))}/>
      <Route path={`${match.url}Standard_s_Normative`} component={asyncComponent(() => import('./Standard_s_Normative'))}/>
      <Route path={`${match.url}Product_Configuration`} component={asyncComponent(() => import('./Product_Configuration'))}/>
      <Route path={`${match.url}Basic_Valve_Parameters`} component={asyncComponent(() => import('./Basic_Valve_Parameters'))}/>
      <Route path={`${match.url}Meeting`} component={asyncComponent(() => import('./Meeting'))}/>
      <Route path={`${match.url}Quality`} component={asyncComponent(() => import('./Quality'))}/>
      <Route path={`${match.url}NCR`} component={asyncComponent(() => import('./NCR'))}/>
      <Route path={`${match.url}Asset`} component={asyncComponent(() => import('./Asset'))}/>
      <Route path={`${match.url}Customer_management`} component={asyncComponent(() => import('./Customer_management'))}/>
      <Route path={`${match.url}Qalert`} component={asyncComponent(() => import('./Qalert'))}/>
      <Route path={`${match.url}Suggestion`} component={asyncComponent(() => import('./Suggestion'))}/>
      <Route path={`${match.url}EHS`} component={asyncComponent(() => import('./EHS'))}/>
      <Route path={`${match.url}Kaizen`} component={asyncComponent(() => import('./Kaizen'))}/>
      
    </Switch>
  </div>
);
 
export default App;
