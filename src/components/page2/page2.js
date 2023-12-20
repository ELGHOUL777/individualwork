
import React from 'react';
import img2 from './img2.jpg'

class Page2 extends React.Component {
  render() {
    return (
      <div className="page_2">
        <div className="text_container--pg-2">
          <p className="txt--pg-2">We empower <br /> businesses <br /> through <br /> strategy and <br /> foresight.</p>
          <button className="btn--pg-2">Find out more</button>
        </div>
        <div>
          <img className="img--pg-2" src={img2} alt="Photo-2" />
        </div>
      </div>
    );
  }
}

export default Page2;
