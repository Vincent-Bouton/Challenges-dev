//DATE : 11/8/20

import React, { useState } from "react";

const playground = () => {
  const [isStart, useIsStart] = useState(false);

  const display = isStart ? (
    <div>hello</div>
  ) : (
    <button onClick={() => useIsStart(true)}>Start</button>
  );
  return <div className={"playground"}>{display}</div>;
};
export default playground;
