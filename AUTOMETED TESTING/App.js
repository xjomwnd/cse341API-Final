// App.js

import React from 'react';
import { baseURLHardcoded, baseURLEnvVariable, baseURLDynamic } from './config';

function App() {
  // Use the appropriate base URL here
  const baseURL = baseURLDynamic;

  // Your component code
  return (
    <div>
      {/* Your application content */}
    </div>
  );
}

export default App;
