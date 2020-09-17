import React from "react";

const ExpandedComponent = (props) => (
  <div className="expand-wrapper">
    <p className="heading">
      <span>VEHICLES LAUNCHED</span>
    </p>
    {props.data.vehicles_launched.map((item) => (
      <div className="expanded-content" key={item.id}>
        <p>Name:&nbsp;&nbsp;{item.id}</p>
        <p>Success Rate Percentage:&nbsp;&nbsp;{item.success_rate_pct}%</p>
      </div>
    ))}
  </div>
);

export default ExpandedComponent;
