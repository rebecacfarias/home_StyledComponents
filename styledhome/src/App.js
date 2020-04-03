import React from 'react';
import Header from './components/Header';
import Global from './theme/global'

function App() {
  return (
    <div /*className="App"*/>
      <React.Fragment>
        <Global />
        <Header />
      </React.Fragment>
     
    </div>
  );
}

export default App;
