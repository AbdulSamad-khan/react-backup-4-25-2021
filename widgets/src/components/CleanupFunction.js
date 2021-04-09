import React, { useEffect } from "react";

export default () => {
  useEffect(() => {
    console.log("Shown on intial render and every re-redner");
    return () => {
      // clean function get called two times first when we no longer show component inside dom
      // and another is when we re-render component again
      console.log("CleanUp function get called");
    };
  });
  return <div>CleanupFunction.js</div>;
};
