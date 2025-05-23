import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import TabOne from './components/tabs/TabOne';
import TabTwo from './components/tabs/TabTwo';
import TabThree from './components/tabs/TabThree';
import TabFour from './components/tabs/TabFour';
import TabFive from './components/tabs/TabFive';
import withRenderWrapper from './components/common/withRenderWrapper';

const components = [
  withRenderWrapper(TabOne),
  withRenderWrapper(TabTwo),
  withRenderWrapper(TabThree),
  withRenderWrapper(TabFour),
  withRenderWrapper(TabFive),
];

const App: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box>
      <Tabs value={tabIndex} onChange={(e, val) => setTabIndex(val)}>
        <Tab label="Wiki" />
        <Tab label="Navigate + API" />
        <Tab label="Recursive Task" />
        <Tab label="Todo List" />
        <Tab label="Buttons" />
      </Tabs>
      <Box sx={{ p: 2 }}>
        {React.createElement(components[tabIndex], { navigateTo: setTabIndex })}
      </Box>
    </Box>
  );
};

export default App;
