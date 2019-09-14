/*
 * @Author: sonlv@nexlesoft.com
 * @Date: 2019-09-11 21:49:03
 * @Last Modified by: sonlv@nexlesoft.com
 * @Last Modified time: 2019-09-14 11:41:03
 */
import React, { memo } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NasaSearch from './containers/nasa';
import Home from './containers/main/Home';
import Video from './pages/Video';

export default memo(function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/nasa-search" component={NasaSearch} />
        <Route path="/video" component={Video} />
      </div>
    </Router>
  );
});
