import React from 'react';
import img5 from './img5.jpg'

class Page5 extends React.Component {
  render() {
    return (
      <div className="page_5">
        <div>
          <img className="img--pg-5" src={img5} alt="Photo-5" />
        </div>
        <div className="text_container--pg-5">
          <p className="txt--pg-5 txt5-1">Our culture <br /> drives what <br /> we do.</p>
          <p className="txt--pg-5 txt5-2">Our values shape every action we <br /> take and decision we make.</p>
          <button className="btn--pg-5">Find out more</button>
        </div>
      </div>
    );
  }
}

export default Page5;
