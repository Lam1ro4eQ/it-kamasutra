import React from 'react';
import './App.css';
import UniversalComponent from "./UniversalComponent";

function App() {
  return (
    <div className="App">
      <UniversalComponent title={'123'}>
        <h1>hello</h1>
      </UniversalComponent>
    </div>
  );
}

export default App;
