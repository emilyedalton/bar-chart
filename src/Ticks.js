import React from "react";
// Need to show equally spaced ticks. Taking the maximum value and
// and the number of ticks to be displayed. Function will calculate what percentage each
//tick will be from the bottom
const Ticks = ({ numberOfTicks, maxValue }) => {
  // position the side bar ticks absolute to their relative container, from the bottom
  function generateTicks(nTicks, vMax) {
    //  the tick colection
    const ticks = [];
    // populate tick collection  with objects
    for (let i = 0; i <= nTicks; i++) {
      const tickVal = (vMax / nTicks) * i;
      ticks[i] = {
        value: Math.floor(tickVal), // value derived from the datasets maximum value
        percent: Math.floor((tickVal / vMax) * 100) // percentage of that value
      };
    }
    // return the array
    return ticks;
  }
  return (
    <div
      className="sideBarTicks"
      style={{
        position: "relative",
        width: "60px"
      }}
    >
      {generateTicks(numberOfTicks, maxValue).map((tick, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            right: 0,
            bottom: `${tick.percent}%`,
            transform: "translateY(50%)"
          }}
        >
          {tick.value}&nbsp;-
        </span>
      ))}
    </div>
  );
};

export default Ticks;
