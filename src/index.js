import React from 'react';
import ReactDOM from 'react-dom';
import './components/page1/style1.css';
import './components/page2/style2.css';
import './components/page3/style3.css';
import './components/page4/style4.css';
import './components/page5/style5.css';
import './components/page6/style6.css';
import './components/page7/style7.css';

import Page1 from './components/page1/page1';
import Page2 from './components/page2/page2';
import Page3 from './components/page3/page3';
import Page4 from './components/page4/page4';
import Page5 from './components/page5/page5';
import Page6 from './components/page6/page6';
import Page7 from './components/page7/page7';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
