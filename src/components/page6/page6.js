import React from 'react';
import img6 from './img6.jpg'

class Page6 extends React.Component {
  render() {
    return (
      <div className="page_6">
        <div className="text_container--pg-6">
          <h1 className="hdr--pg-6">Frequently asked <br /> questions</h1>
          <div className="txt--pg-6 txt6-1">
          </div>
          <div className="txt--pg-6 txt6-2">
          </div>
        </div>
        <div>
          <img className="img--pg-6" src={img6} alt="Photo-6" />
        </div>
      </div>
    );
  }
}

export default Page6;
