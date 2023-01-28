import React from 'react';
import './App.css';
import {
  // BrowserRouter as Router,
  Link,
  Outlet
} from 'react-router-dom'

function App() {
  return (
    <Guard>
      <div className="App">
        <Link to='/home'>home</Link>
        <Link to='/about'>about</Link>
          <Outlet/>
        {/* <!--路由注册--> */}
        <RouteTable/>
      </div>
    <Guard>
  );
}

export default App;
