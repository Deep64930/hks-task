import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
const TaskList = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Tabs
        indicatorColor="secondary"
        textColor="secondary"
        value={value}
        onChange={(e, val) => setValue(val)}
      >
        <Tab label="<" />
        <Tab label="Daily" />
        <Tab label="Pending" />
        <Tab label="Montghly" />
        <Tab label=">" />
      </Tabs>
    </div>
  );
};

export default TaskList;
