/* eslint-disable */

import React, { useState } from "react";

import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";

import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <DataProvider>
      <Page1 />
      <Page2 />
    </DataProvider>
  );
}

export default App;
